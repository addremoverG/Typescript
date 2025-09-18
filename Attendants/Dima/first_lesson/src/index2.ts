import express from "express";
import path from "path";

(async (): Promise<void> => {
  const app = express();
  const port = 3000;

  app.get("/", (reg, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>First page</title>
      </head>
      <body>
          <h1>Hello world 2</h1>
          <form action="http://localhost:3000/cred" method="get">
              <input type="text" id="fname" name="fname"><br>
              <input type="text" id="lname" name="lname"><br>
              <input type="submit" value="Submit">
          </form>
      </body>
      </html>`);
  });

  app.get("/cred", (req, res) => {
    const { fname, lname } = req.query;
    console.log(fname, lname);
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Second page</title>
      </head>
      <body>
          <h1>Creds</h1>
          <p>Name: ${fname}</p>
          <p>Surname: ${lname}</p>
      </body>
      </html>`);
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
})().catch((err) => {
  console.log(err instanceof Error ? err.message : err);
  process.exit(1);
});
