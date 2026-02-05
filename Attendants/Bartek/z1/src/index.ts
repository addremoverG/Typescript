import express, { Express } from 'express';
import { routing } from './routes/Routes';
import { setupStaticAssets } from './middleware/static-assets.middleware';

(async (): Promise<void> => {
  const server: Express = express();
  const port = Number(process.env.PORT) || 3000;

  setupStaticAssets(server);
  routing(server);

  server.listen(port, () => {
    console.log(`Port number: ${port}`);
  });
})().catch((err) => {
  console.log(err instanceof Error ? err.message : err);
  process.exit(1);
});
