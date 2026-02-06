import { join } from 'path';
import { Express } from 'express';
import express from 'express';
import session from 'express-session';

export function setupSessionMiddleware(server: Express) {
  server.use(
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: false,
        maxAge: 3600000,
      },
    }),
  );
}

export function setupStaticAssets(server: Express) {
  server.use(
    // express.static(join(__dirname, '../..', 'public')),
    express.static(join(__dirname, '..', 'public')),
    // express.static(join(__dirname, '../..', 'public/images')),
  );
}
