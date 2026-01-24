import express, { Express } from 'express';
import { Router } from '../router/Router';

export const [HOST, PORT] =
  process.argv[2] === 'localhost'
    ? ['localhost', Number(process.argv[3])]
    : ['test', 3000];

export const stylesPath = `${__dirname}`;
export const imagesPath = `${__dirname}`;

(async (): Promise<void> => {
  const server: Express = express();

  new Router(server, __dirname);

  server.listen(PORT, (): void => {
    console.log(`Server is run on : http://${HOST}:${PORT}`);
  });
})().catch((err: Error) => {
  console.log(err instanceof Error ? err.message : err);
});
