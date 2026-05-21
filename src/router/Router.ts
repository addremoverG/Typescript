import express, { Express } from 'express';
import session from 'express-session';
import { colorMiddleware } from '../middleware/colorMiddleware';
import { CssController } from '../controller/CssController';
import { getRegistry } from './getRouteRegistry';
import { setupMiddleware } from '../middleware/generalMiddleware';
import { postRegistry } from './postRouteRegistry';

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
    setupMiddleware(this.server, this.dir);

    getRegistry.getPaths().forEach((route) => {
      this.server.get(route, getRegistry.getHandler(route));
    });

    postRegistry.getPaths().forEach((route) => {
      this.server.post(route, postRegistry.getHandler(route));
    });
  }
}
