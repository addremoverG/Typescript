import { join } from 'path';
import { Express } from 'express';
import express from 'express';
import session from 'express-session';
import { injectSessionData } from './session-data.middleware';
import createMemoryStore from 'memorystore';

const MemoryStore = createMemoryStore(session);

export class Middleware {
  public static enable(server: Express): void {
    server.use(express.static(join(__dirname, '..', 'public')));
    server.use(express.urlencoded({ extended: true }));
    server.use(express.json());

    server.use(
      session({
        secret: process.env.SESSION_SECRET || 'zapasowy-sekret',
        resave: false,
        saveUninitialized: true,
        cookie: {
          secure: false,
          maxAge: 60 * 60 * 1000,
        },
        store: new MemoryStore({
          checkPeriod: 24 * 60 *60 * 1000,
        }),
      }),
    );

    server.use(injectSessionData);
  }
}
