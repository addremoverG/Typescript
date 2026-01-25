<h1 align="center">Welcome to node 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/node" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/node.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

## Install

```sh
npm install
```

## Run tests

```sh
npm run test
```

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_


my-express-app/
│
├── public/               # <-- Static assets go here
│   ├── css/
│   ├── js/
│   └── img/
├── src/
│   ├── controllers/      # Handles incoming requests, validates data, calls services, sends responses
│   ├── models/           # Defines data schemas and manages database interactions (e.g., Mongoose/Sequelize)          
|   ├── views/              # Optional: Used if rendering server-side templates (e.g., EJS, Pug)
|   |    ├── layouts/        # Global wrappers (e.g., main.ejs, admin.ejs)
|   |    │   ├── main.ejs    # Primary layout with <head>, <body> tags
|   |    │   └── auth.ejs    # Specialized layout for login/register pages
|   |    ├── partials/       # Reusable UI components (header, footer, nav)
|   |    │   ├── header.ejs
|   |    │   ├── footer.ejs
|   |    │   └── sidebar.ejs
|   |    ├── pages/          # Feature-specific templates
|   |    │   ├── home/       # Subfolders for each domain/feature
|   |    │   │   └── index.ejs
|   |    │   ├── products/
|   |    │   │   ├── list.ejs
|   |    │   │   └── detail.ejs
|   |    │   └── errors/
|   |    │       ├── 404.ejs
|   |    │       └── 500.ejs
|   |    └── emails/         # (Optional) Templates for transactional emails          
|   ├── routes/                # Defines URL endpoints and links them to specific controller functions
|   |    ├── v1/                # Versioned API routes
|   |    │   ├── auth.routes.ts # Auth endpoints (login, register)
|   |    │   ├── user.routes.ts # User-related endpoints
|   |    │   ├── post.routes.ts # Content-related endpoints
|   |    │   └── index.ts       # Combines all v1 routes
|   |    ├── v2/                # Future API versions
|   |    │   └── ...
|   |    └── index.ts           # Root router to mount all versions
│   ├── services/         # Contains core business logic (used by controllers, keeps them lean)
│   ├── middleware/       # Custom Express middleware (authentication, logging, etc.)
│   ├── utils/            # Reusable helper functions
│   ├── config/           # Configuration files (database connection logic, app settings)
│   ├── types/            # Global TypeScript interface definitions
│   ├── app.ts            # Application setup and configuration
│   └── server.ts         # Entry point, starts the server
│
├── node_modules/         # Installed dependencies
├── .env                  # Environment variables (at the root level, ignored by git)
├── .gitignore            # Specifies files to ignore in version control (must include .env)
├── package.json          # Project metadata and dependencies
├── tsconfig.json         # TypeScript compiler options
└── README.md             # Project documentation


Use Case 	Recommended Tool 2026	Why?
Business Logic        - Classes (Services) - Encapsulation and easier testing via dependency injection.
Data Transformation   - Functions          - Stateless, pure, and easily reusable across the app.
API Endpoints	        - Functions          - Express's architecture is built on middleware function chains.
Stateful Data         - Objects (Models)   - Represents the "shape" of your data and its current state.


Validate, Sanitize 

project/
├── middlewares/
│   └── validateUser.js  <-- Tutaj definiujesz reguły (np. express-validator)
├── routes/
│   └── userRoutes.js    <-- Tutaj wpinasz middleware do konkretnej ścieżki
├── controllers/
│   └── userController.js <-- Tutaj tylko obsługa sukcesu/błędu
└── models/
    └── userModel.js     <-- Tutaj ograniczenia bazy danych