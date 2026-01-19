import express, { Express } from "express";
import { Router } from "./routes/Router";

(async (): Promise<void> => {
  const server: Express = express();
  const PORT = 3000;

  new Router(server, __dirname);
  
  server.listen(PORT, (): void => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
})().catch((err: Error) => {
  console.log(err instanceof Error ? err.message : err);
});
