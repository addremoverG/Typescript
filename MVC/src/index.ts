import express from 'express';

(async (): Promise<void> => {
  const server = express();
  const port = 3000;

  server.get('/', (req, res) => {
    res.send(`
      <!doctype html>
      <html lang="en">
      <head>
          <meta charset="utf-8">    
          <title>ExpressJS TypeScript starter template</title>
          <style> .test {text-align: center;}</style>
      </head>
      <body>
          <div class="test">  
            <h1>Home Page</h1>
            <form action="http://localhost:3000/cred" method="get">
              <input type="text" id="firstName" name="fname" value="John"><br>
              <input type="text" id="lastName" name="lname" value="Doe"><br><br>
              <input type="submit" value="Submit">
            </form>
          </div>
      </body>
      </html>
    `);
  });

  server.get('/cred', (req, res) => {
    const { fname, lname } = req.query;
    res.send(`
       <!doctype html>
      <html lang="en">
      <head>
          <meta charset="utf-8">    
          <title>Second page</title>
          <style> #test {text-align: center;} h1 {text-decoration: underline; text-decoration-color: red;}</style>
      </head>
      <body>
          <div id="test">  
            <h1>Credentials</h1>
            <p>Name: ${fname}</p>
            <p>Surname: ${lname}</p>
          </div>  
      </body>
      </html>
    `);
  });

  server.listen(port, () => {
    console.log(`[Log] Server listening under port: ${port}`);
  });
})().catch((err) => {
  console.log(err instanceof Error ? err.message : err);
  process.exit(1);
});

/*
  const addition = (a: number, b: number): number => {
    return a + b;
  };

  const number1: number = 5;
  const number2: number = 10;
  const result: number = addition(number1, number2);

  console.log(`The application name is "${process.env.APP_NAME}"`);

  console.log('The result is %d', result);
*/
