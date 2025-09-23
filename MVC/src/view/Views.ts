export class Views {
  static getMainPage() {
    return `
      <!doctype html>
      <html lang="en">
      <head>
          <meta charset="utf-8">    
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
          <div class="test">
            <h1>Data Page</h1>
            
            <a href="http://localhost:3000/data">Redirect</a>
          </div>
      </body>
      </html>
    `;
  }

  static getCredPage(fname: string, lname: string) {
    return `
      <!doctype html>
      <html lang="en">
      <head>
          <meta charset="utf-8">   
          <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
          <title>Cred page</title>
          <style>
            #test {text-align: center;}
            h1 {text-decoration: underline; text-decoration-color: red;}
            .test {text-align: center;}
          </style>
      </head>
      <body>
          <div id="test">  
            <h1>Credentials</h1>
            <p>Name: ${fname}</p>
            <p>Surname: ${lname}</p>
          </div>
          <br/>
          <div class="test">
            <form action="http://localhost:3000" method="get">
              <input type="submit" value="Return">
            </form>
          </div>
      </body>
      </html>
    `;
  }

  static getDataPage(data: (number | string)[][]) {
    return `
      <!doctype html>
      <html lang="en">
      <head>
          <meta charset="utf-8">   
          <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
          <title>Data page</title>
          <style>
            .test {text-align: center;}
          </style>
      </head>
      <body>
        <br />
        <div class="test">
        <ul>
            ${data.map((inner) => `<li>${inner.toString()}</li>`)}
        </ul>
        </div>
        <br />
        <div class="test">
          <form action="http://localhost:3000" method="get">
            <input type="submit" value="Return">
          </form>
        </div>
      </body>
      </html>
    `;
  }
}
