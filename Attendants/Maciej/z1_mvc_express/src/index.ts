import express from 'express';
import { Routes } from './routes/Routes';

(async (): Promise<void> => {
  const server = express();
  const port = Number(process.env.PORT) || 3000;

  new Routes(server, __dirname);

  server.listen(port, () => {
    console.log(`[Log] Server listening under port: ${port}`);
  });
})().catch((err) => {
  console.log(err instanceof Error ? err.message : err);
});