import { RequestHandler } from 'express';

type Handler = RequestHandler;
type RouteHandler = Handler | Handler[];

class PostRouteRegistry {
  private routes = new Map<string, RouteHandler>();

  register(path: string, handler: RouteHandler): void {
    this.routes.set(path, handler);
  }
  getHandler(path: string): RouteHandler {
    const handler = this.routes.get(path);
    if (!handler) {
      throw new Error(`No handler for ${path}`);
    }
    return handler;
  }

  getPaths(): string[] {
    return Array.from(this.routes.keys());
  }
}

export const postRegistry = new PostRouteRegistry();
