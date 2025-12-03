import express, { Express } from 'express';
import { Routes } from './router/Routes';

(async (): Promise<void> => {
  const server: Express = express();
  const port: number = 3000;

  new Routes(server, __dirname);

  server.listen(port, () => {
    console.log(`Server is run on ${port} port`);
  });
})().catch((err) => {
  console.log(err instanceof Error ? err.message : err);
});
