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

    Object.keys(pageGetRoutes).forEach((route) => {
      this.server.get(route, resolveGetPageController(route));
    });

    this.server.get('/api/color', (req, res) => {
      const color: string = req.session.color ?? '#90ee90';
      res.json({ color });
    });

    this.server.post('/api/color', (req, res) => {
      const { color } = req.body;
      req.session.color = color;
      res.json({ color: req.session.color });
    });
  }
}
