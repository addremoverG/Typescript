import { join } from 'path';
import { Express } from 'express';
import express from 'express';

export function setupStaticAssets(server: Express) {
  server.use(
    // express.static(join(__dirname, '../..', 'public')),
    express.static(join(__dirname, '..', 'public')),
    // express.static(join(__dirname, '../..', 'public/images')),
  );
}
