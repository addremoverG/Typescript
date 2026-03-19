import express from 'express';
import { StaticAssetsMiddleware } from './middleware/static-assets.middleware';
import { AppRouter } from './routes/router';

(async (): Promise<void> => {
  const PORT = Number(process.env.PORT) || 3000;

  const server = express();

  StaticAssetsMiddleware.enable(server);

  AppRouter.init(server);

  server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
})().catch((err) => {
  console.log(err instanceof Error ? err.message : err);
});