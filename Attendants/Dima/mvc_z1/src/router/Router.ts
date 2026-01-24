import express, { Express } from 'express';
import { pageRoutes } from './mapper';
import { resolvePageController } from './mapper';

export class Router {
  constructor(
    private server: Express,
    private dir: string,
  ) {
    this.server.use(
      express.json(),
      express.urlencoded({ extended: true }),
      express.static(`${this.dir}/styles`),
      express.static(`${this.dir}/images`),
    );

    Object.keys(pageRoutes).forEach((route) => {
      this.server.get(route, resolvePageController(route));
    });
  }
}
