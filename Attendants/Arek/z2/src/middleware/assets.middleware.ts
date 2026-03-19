import { join } from 'path';
import { Express } from 'express';
import express from 'express';
import session from 'express-session';

export function setupMiddleware(server: Express) {
  server.use(
    express.static(join(__dirname, '../..', 'public')), // add static content for browser
    express.json(), // parse json
    express.urlencoded({ extended: true }), // parsing incoming request, accessing body as js object
    session({
      secret: process.env.SESSION_SECRET ?? 'default_secret', // Needed, needed to sign cookie identifier of session
      resave: false, // do not save session if it was not modify
      saveUninitialized: true, // do not create session to time without modify
      cookie: {
        secure: false, // TRUE for HTTPS
        maxAge: 60 * 60 * 1000, // COOKIE LIFETIME (np. 1 godzina)
      },
    }),
  );
}
