import express from 'express'; // , { Application, Express }
import { setupStaticAssets } from './middleware/static-assets.middleware';
import { routing } from './routes/router';

(async (): Promise<void> => {
  const PORT = Number(process.env.PORT) || 3000;

  const server = express();

  // middleware setup
  setupStaticAssets(server);

  // routing
  routing(server);

  server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
})().catch((err) => {
  console.log(err instanceof Error ? err.message : err);
  // process.exit(1);
});
