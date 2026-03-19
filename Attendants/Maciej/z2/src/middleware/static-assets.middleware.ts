import { join } from 'path';
import { Express } from 'express';
import express from 'express';

export class StaticAssetsMiddleware {
  public static enable(server: Express): void {
    server.use(
      express.static(join(__dirname, '..', 'public')),
    );
  }
}