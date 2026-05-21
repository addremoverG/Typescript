import express, { Express } from 'express';
import { Router } from './router/Router';
import './router/getRoutesMapper';
import './router/postRoutesMapper';
import path from 'path';

export const [HOST, PORT] =
  process.argv[2] === 'localhost'
    ? ['localhost', Number(process.argv[3])]
    : [process.env.RAILWAY_PUBLIC_DOMAIN, 3000];

(async (): Promise<void> => {
  const server: Express = express();

  new Router(server, path.join(__dirname, '..'));

  server.listen(PORT, (): void => {
    console.log(`Server is run on : http://${HOST}:${PORT}`);
  });
})().catch((err: Error) => {
  console.log(err instanceof Error ? err.message : err);
});
