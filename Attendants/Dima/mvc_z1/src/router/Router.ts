import { Express } from 'express';
import { setupMiddleware } from '../middleware/generalMiddleware';
import { getRegistry } from './getRouteRegistry';
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
      console.log('Registering GET route:', route);
      this.server.get(route, getRegistry.getHandler(route));
    });

    postRegistry.getPaths().forEach((route) => {
      console.log('Registering POST route:', route);
      this.server.post(route, postRegistry.getHandler(route));
    });
  }
}
