import express, { Express } from 'express';
import { pageGetRoutes } from './mapper';
import { resolveGetPageController } from './mapper';
import session from 'express-session';

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

    // Middleware для установки локальных переменных
    this.server.use((req, res, next) => {
      res.locals.navColor = req.session.color ?? '#90ee90';
      next();
    });

    this.server.post('/set-color', (req, res) => {
      const { color } = req.body;
      req.session.color = color;
      const referer = req.get('referer') || '/';
      res.redirect(referer);
    });

    Object.keys(pageGetRoutes).forEach((route) => {
      this.server.get(route, resolveGetPageController(route));
    });
  }
}
