import session from 'express-session';
import { Express } from 'express';

export class SessionMiddleware {
  public static enable(server: Express): void {
    server.use(
      session({
        secret: process.env.SESSION_SECRET || 'zapasowy-sekret',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false } 
      })
    );
  }
}