import express, { Express } from 'express';
import session from 'express-session';
import { colorMiddleware } from './colorMiddleware';

export function setupMiddleware(server: Express, dir: string): void {
  server.use(
    express.json(),
    express.urlencoded({ extended: true }),
    express.static(`${dir}/public/styles`),
    express.static(`${dir}/public/images`),
    session({
      secret: process.env.SESSION_SECRET || 'secret',
      resave: false,
      saveUninitialized: true,
    }),
    colorMiddleware,
  );
}
