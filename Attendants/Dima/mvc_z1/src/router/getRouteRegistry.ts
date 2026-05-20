import { Request, Response } from 'express';

type Handler = (req: Request, res: Response) => void | Promise<void>;

class GetRouteRegistry {
  private routes = new Map<string, Handler>();

  register(path: string, handler: Handler): void {
    this.routes.set(path, handler);
  }
  getHandler(path: string): Handler {
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

export const getRegistry = new GetRouteRegistry();
