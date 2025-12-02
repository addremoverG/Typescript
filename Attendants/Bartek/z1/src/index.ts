import express, { Express } from "express";
import path from "path";
// import { Express } from "express";

(async (): Promise<void> => {
  const app: Express = express();
  const port = 3000;

  app.use(express.static(path.join(__dirname, "public")));
  app.get("/", (req, res) => {
    const filePath = "public/index.html";
    res.sendFile(filePath, { root: __dirname });
  });

  app.listen(port, () => {
    console.log(`Port: ${port}`);
  });
})().catch((err) => {
  console.log(err instanceof Error ? err.message : err);
  process.exit(1);
});
