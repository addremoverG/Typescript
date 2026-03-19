import express, { Express } from 'express';
import { pageRoutes } from './mapper';
import { resolvePageController } from './mapper';

import session from 'express-session';

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
      session({
        secret: 'your-secret-key',
        resave: false,
        saveUninitialized: true,
      }),
    );

    Object.keys(pageRoutes).forEach((route) => {
      this.server.get(route, resolvePageController(route));
    });
  }
}
