# Рекомендации по соблюдению принципов SOLID

Проект реализован по паттерну **MVC** (Model-View-Controller). Все рекомендации учитывают эту архитектуру и не предлагают её менять — только исправить нарушения SOLID внутри каждого слоя.

---

## S — Single Responsibility Principle (Принцип единственной ответственности)

### Проблема: `Router.ts`

Класс `Router` выполняет сразу несколько несвязанных задач:
- настройка middleware (json, static, session)
- бизнес-логика цвета навбара (middleware + `/set-color` endpoint)
- регистрация всех маршрутов

Обработка `/set-color` — это ответственность **контроллера**, а не роутера.

### Исправление: выносим middleware цвета и обработчик `/set-color`

**`src/middleware/colorMiddleware.ts`** — новый файл:
```typescript
import { Request, Response, NextFunction } from 'express';

export function colorMiddleware(req: Request, res: Response, next: NextFunction): void {
  res.locals.navColor = req.session.color ?? '#90ee90';
  next();
}
```

**`src/controller/CssController.ts`** — новый файл (обработчик формы цвета уходит из Router в Controller-слой):
```typescript
import { Request, Response } from 'express';

export class CssController {
  static setColor() {
    return (req: Request, res: Response): void => {
      const { color } = req.body;
      req.session.color = color;
      res.redirect(req.get('referer') || '/');
    };
  }
}
```

**`src/router/Router.ts`** — исправленная версия:
```typescript
import express, { Express } from 'express';
import session from 'express-session';
import { pageGetRoutes } from './mapper';
import { resolveGetPageController } from './mapper';
import { colorMiddleware } from '../middleware/colorMiddleware';
import { CssController } from '../controller/CssController';

declare module 'express-session' {
  interface SessionData {
    color: string;
  }
}

export class Router {
  constructor(
    private server: Express,
    private dir: string,
  ) {
    this.server.use(
      express.json(),
      express.urlencoded({ extended: true }),
      express.static(`${this.dir}/public/styles`),
      express.static(`${this.dir}/public/images`),
      express.static(`${this.dir}/public/js`),
      session({
        secret: process.env.SESSION_SECRET || 'secret',
        resave: false,
        saveUninitialized: true,
      }),
    );

    this.server.use(colorMiddleware);

    this.server.post('/set-color', CssController.setColor());

    Object.keys(pageGetRoutes).forEach((route) => {
      this.server.get(route, resolveGetPageController(route));
    });
  }
}
```

---

### Проблема: `Pg.ts`

`DB` смешивает три разные ответственности:
- управление Singleton
- конфигурацию подключения к БД
- SQL-запросы (`getAllUsers`)

### Исправление: выносим запросы в отдельный репозиторий

**`src/model/Pg.ts`** — исправленная версия (только подключение и Singleton):
```typescript
import pgPromise, { IDatabase } from 'pg-promise';

export class DB {
  private static instance: DB;
  readonly connection: IDatabase<{}>;

  private constructor() {
    const pgp = pgPromise({
      connect(e) {
        console.log(`Connected: ${e.client.database}`);
      },
      error(err, e) {
        console.error('DB Error:', err, e.query);
      },
    });

    this.connection = pgp({
      host: 'localhost',
      port: Number(process.env.POSTGRES_PORT),
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      max: 10,
    });
  }

  public static getInstance(): DB {
    if (!DB.instance) {
      DB.instance = new DB();
    }
    return DB.instance;
  }
}
```

**`src/model/UserRepository.ts`** — новый файл (SQL-запросы живут в Model-слое):
```typescript
import { IUserRepository, User } from './IUserRepository';
import { DB } from './Pg';

export class UserRepository implements IUserRepository {
  private db = DB.getInstance().connection;

  getAllUsers(): Promise<User[]> {
    return this.db.manyOrNone('SELECT * FROM test_table');
  }
}
```

---

## O — Open/Closed Principle (Принцип открытости/закрытости)

### Проблема: `mapper.ts` + `PageController.ts`

Чтобы добавить новую страницу, нужно **редактировать** два существующих файла:
1. `PageController.ts` — добавить статический метод
2. `mapper.ts` — добавить запись в объект маршрутов

Это нарушает принцип: расширение функциональности требует изменения существующего кода.

### Исправление: паттерн реестра маршрутов

**`src/router/RouteRegistry.ts`** — новый файл:
```typescript
import { Request, Response } from 'express';

type Handler = (req: Request, res: Response) => void | Promise<void>;

class RouteRegistry {
  private routes = new Map<string, Handler>();

  register(path: string, handler: Handler): void {
    this.routes.set(path, handler);
  }

  getHandler(path: string): Handler {
    const handler = this.routes.get(path);
    if (!handler) throw new Error(`No handler for: ${path}`);
    return handler;
  }

  getPaths(): string[] {
    return Array.from(this.routes.keys());
  }
}

export const registry = new RouteRegistry();
```

**`src/router/Router.ts`** — регистрация маршрутов через реестр:
```typescript
// В конструкторе вместо Object.keys(pageGetRoutes).forEach:
registry.getPaths().forEach((route) => {
  this.server.get(route, registry.getHandler(route));
});
```

**Использование при добавлении новой страницы** (только один новый файл, существующие не меняются):
```typescript
// src/routes/newPageRoute.ts — новый файл
import { Request, Response } from 'express';
import { NewPageView } from '../view/pages/newPage';
import { registry } from '../router/RouteRegistry';

registry.register('/new-page', (req: Request, res: Response) => {
  res.send(new NewPageView().renderPage(res.locals));
});
```

---

## L — Liskov Substitution Principle (Принцип подстановки Барбары Лисков)

### Проблема: `abstractView.ts` + `getDBdata.ts`

`DBPageView` расширяет `View`, но нарушает контракт родительского класса:
- `View.renderPage()` предполагает, что контент берётся из `this.innerBody`
- `DBPageView` игнорирует `this.innerBody` (задаёт `""`), переопределяет `renderPage()` и сам вызывает `generateHTML`
- Подкласс **не является взаимозаменяемым** с базовым классом

### Исправление: заменяем поле `innerBody` на абстрактный метод `getBody()`

`renderPage()` остаётся единственной точкой рендеринга и больше **не переопределяется** в подклассах.

**`src/view/abstractView.ts`** — исправленная версия:
```typescript
import { generateHTML } from './components/htmlBuilder';

export abstract class View {
  abstract title: string;

  // Метод вместо поля — подклассы могут строить контент динамически
  abstract getBody(locals?: Record<string, any>): string;

  // renderPage теперь закрыт для переопределения — контракт гарантирован
  renderPage(locals?: Record<string, any>): string {
    return generateHTML(this.title, this.getBody(locals), locals);
  }
}
```

**`src/view/pages/getDBdata.ts`** — исправленная версия (нет нарушения LSP):
```typescript
import { View } from '../abstractView';

export class DBPageView extends View {
  title = 'DB interaction';

  getBody(locals?: Record<string, any>): string {
    const users: { id: number; name: string; email: string }[] = locals?.users ?? [];
    const rows = users
      .map(
        (user) => `
      <tr>
        <td>${user.id}</td><td>${user.name}</td><td>${user.email}</td>
      </tr>`,
      )
      .join('');

    return `
  <div class="db_page">
    <h1>Here the DB data:</h1>
    <table>
      <tr><th>ID</th><th>Name</th><th>Email</th></tr>
      ${rows}
    </table>
  </div>`;
  }
}
```

**Пример обновлённой статической страницы** (все остальные View обновляются аналогично):
```typescript
// src/view/pages/aboutPage.ts
import { View } from '../abstractView';

export class AboutPageView extends View {
  title = 'About Page';

  getBody(): string {
    return `
  <div class="about_page">
    <h1>About info here</h1>
  </div>`;
  }
}
```

---

## I — Interface Segregation Principle (Принцип разделения интерфейсов)

### Проблема: отсутствие интерфейсов

В проекте нет ни одного `interface`. Единственная абстракция — абстрактный класс `View`, который в текущем виде (с полем `innerBody`) вынуждал `DBPageView` объявлять неиспользуемое поле. Нет контракта для Model-слоя.

### Исправление: вводим интерфейсы для каждого слоя MVC

**`src/model/IUserRepository.ts`** — новый файл (контракт Model-слоя):
```typescript
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface IUserRepository {
  getAllUsers(): Promise<User[]>;
}
```

**`src/view/IView.ts`** — новый файл (контракт View-слоя):
```typescript
export interface IView {
  title: string;
  renderPage(locals?: Record<string, any>): string;
}
```

Благодаря разделению:
- Controller зависит от `IUserRepository`, а не от конкретного класса `DB`
- View-компоненты зависят от `IView`, а не от абстрактного класса

---

## D — Dependency Inversion Principle (Принцип инверсии зависимостей)

### Проблема: `PageController.ts`

Контроллер верхнего уровня напрямую зависит от конкретных реализаций:
- создаёт конкретные View-классы через `new MainPageView()`
- напрямую вызывает `DB.getInstance().getAllUsers()`

### Исправление: отдельный контроллер для DB-страницы с инъекцией зависимости

Логику работы с БД выносим в отдельный контроллер, зависящий от интерфейса, а не от конкретного класса.

**`src/controller/DbController.ts`** — новый файл:
```typescript
import { Request, Response } from 'express';
import { IUserRepository } from '../model/IUserRepository';
import { DBPageView } from '../view/pages/getDBdata';

export class DbController {
  constructor(private userRepo: IUserRepository) {}

  getDBDataPage() {
    return async (req: Request, res: Response): Promise<void> => {
      const users = await this.userRepo.getAllUsers();
      res.send(new DBPageView().renderPage({ ...res.locals, users }));
    };
  }
}
```

**`src/controller/PageController.ts`** — исправленная версия (убираем зависимость от `DB`):
```typescript
import { Request, Response } from 'express';
import { ContactsPageView } from '../view/pages/contactsPage';
import { MapPageView } from '../view/pages/mapPage';
import { MainPageView } from '../view/pages/mainPage';
import { CompanyHistoryPageView } from '../view/pages/companyHistoryPage';
import { ManagementPageView } from '../view/pages/managementPage';
import { AboutPageView } from '../view/pages/aboutPage';
import { ProductsPageView } from '../view/pages/productsPage';
import { CertificatePageView } from '../view/pages/certificatePage';
import { CompanyPresentationPageView } from '../view/pages/CompanyPresentation';
import { CssPageView } from '../view/pages/cssPage';

export class PageController {
  static getMainPage() {
    return (req: Request, res: Response) => {
      res.send(new MainPageView().renderPage(res.locals));
    };
  }

  static getContactPage() {
    return (req: Request, res: Response) => {
      res.send(new ContactsPageView().renderPage(res.locals));
    };
  }

  static getMapPage() {
    return (req: Request, res: Response) => {
      res.send(new MapPageView().renderPage(res.locals));
    };
  }

  static getCompanyHistoryPage() {
    return (req: Request, res: Response) => {
      res.send(new CompanyHistoryPageView().renderPage(res.locals));
    };
  }

  static getManagementPage() {
    return (req: Request, res: Response) => {
      res.send(new ManagementPageView().renderPage(res.locals));
    };
  }

  static getAboutPage() {
    return (req: Request, res: Response) => {
      res.send(new AboutPageView().renderPage(res.locals));
    };
  }

  static getProductsPage() {
    return (req: Request, res: Response) => {
      res.send(new ProductsPageView().renderPage(res.locals));
    };
  }

  static getCertificatePage() {
    return (req: Request, res: Response) => {
      res.send(new CertificatePageView().renderPage(res.locals));
    };
  }

  static getCompanyPresentationPage() {
    return (req: Request, res: Response) => {
      res.send(new CompanyPresentationPageView().renderPage(res.locals));
    };
  }

  static getCssPage() {
    return (req: Request, res: Response) => {
      res.send(new CssPageView().renderPage(res.locals));
    };
  }
}
```

**`src/router/mapper.ts`** — исправленная версия (маршрут `/dbdata` берёт контроллер с инъекцией):
```typescript
import { PageController } from '../controller/PageController';
import { DbController } from '../controller/DbController';
import { UserRepository } from '../model/UserRepository';
import { Request, Response } from 'express';

type PageHandler = (req: Request, res: Response) => void | Promise<void>;

const dbController = new DbController(new UserRepository());

export const pageGetRoutes: Record<string, PageHandler> = {
  '/': PageController.getMainPage(),
  '/contacts': PageController.getContactPage(),
  '/map': PageController.getMapPage(),
  '/company_history': PageController.getCompanyHistoryPage(),
  '/management': PageController.getManagementPage(),
  '/about': PageController.getAboutPage(),
  '/products': PageController.getProductsPage(),
  '/certificate': PageController.getCertificatePage(),
  '/company_presentation': PageController.getCompanyPresentationPage(),
  '/css': PageController.getCssPage(),
  '/dbdata': dbController.getDBDataPage(),
};

export function resolveGetPageController(endpoint: string): PageHandler {
  const handler = pageGetRoutes[endpoint];

  if (!handler) {
    throw new Error(`No controller found for endpoint: ${endpoint}`);
  }

  return handler;
}
```

---

## Итоговая структура файлов после исправлений

```
src/
├── controller/
│   ├── PageController.ts     — статические страницы (без DB-зависимости)
│   ├── DbController.ts       — NEW: страница БД, зависит от IUserRepository
│   └── CssController.ts      — NEW: обработчик формы цвета
├── middleware/
│   └── colorMiddleware.ts    — NEW: middleware цвета (выделен из Router)
├── model/
│   ├── IUserRepository.ts    — NEW: интерфейс + тип User
│   ├── UserRepository.ts     — NEW: SQL-запросы (реализует IUserRepository)
│   └── Pg.ts                 — только Singleton + подключение
├── router/
│   ├── RouteRegistry.ts      — NEW: реестр маршрутов (для OCP)
│   ├── Router.ts             — только регистрация middleware и маршрутов
│   └── mapper.ts             — создаёт DbController с инъекцией зависимости
└── view/
    ├── IView.ts              — NEW: интерфейс View-слоя
    ├── abstractView.ts       — getBody() вместо innerBody (LSP fix)
    └── pages/
        ├── getDBdata.ts      — переопределяет getBody(), не renderPage()
        └── ...               — остальные страницы: getBody() вместо innerBody
```

---

## Сводная таблица нарушений и исправлений

| Принцип | Нарушение | Затронутые файлы | Исправление |
|---------|-----------|-----------------|-------------|
| **SRP** | `Router` содержит бизнес-логику цвета | `Router.ts` | Выделить `colorMiddleware.ts`, `CssController.ts` |
| **SRP** | `DB` смешивает подключение и SQL | `Pg.ts` | Выделить `UserRepository.ts` |
| **OCP** | Новая страница требует правки 2 файлов | `mapper.ts`, `PageController.ts` | `RouteRegistry.ts` — регистрация без модификации |
| **LSP** | `DBPageView` нарушает контракт `renderPage()` | `abstractView.ts`, `getDBdata.ts` | Заменить `innerBody` на абстрактный метод `getBody()` |
| **ISP** | Нет интерфейсов, лишнее поле `innerBody` у `DBPageView` | Весь проект | Добавить `IView.ts`, `IUserRepository.ts` |
| **DIP** | `PageController` зависит от `DB.getInstance()` | `PageController.ts` | `DbController` с инъекцией `IUserRepository` |
