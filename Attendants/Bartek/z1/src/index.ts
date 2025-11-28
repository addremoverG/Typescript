import express from "express";
import path from "path";

(async (): Promise<void> => {
  const app = express();
  const port = 3000;

  app.use(express.static(path.join(__dirname, "public")));
  app.get("/", (reg, res) => {
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
