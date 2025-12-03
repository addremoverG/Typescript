export class Views {
  private static showInBody(htmlElement: string) {
    return `
    <!doctype html>
      <html lang="en">
      <head>
          <meta charset="utf-8">    
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>ExpressJS TypeScript starter template</title>
          <link href="styles.css" rel="stylesheet" type="text/css">
      </head>
      <body>
          ${htmlElement}
      </body>
      </html>
    `;
  }

  static getMainPage() {
    return Views.showInBody(`
      <div class="test">  
      <h2>Home Page</h2>
      <form action="http://localhost:3000/cred" method="post">
        <input type="text" id="firstName" name="fname" placeholder="First name" autofocus><br><br>
        <input type="text" id="lastName" name="lname" placeholder="Last name"><br><br>
        <input id="submitButton" type="submit" value="Submit">
      </form>
      </div>
    `);
  }

  static showCredentialsPage(fname: string, lname: string) {
    return Views.showInBody(`
      <div class="test"> 
        <form>
          <h2>Welcome:</h2>
          <h2>${fname} ${lname}<h2>
        </form>
      </div>
    `);
  }

  static failedValidationPage() {
    return Views.showInBody(`
      <div class="test"> 
        <form>
          <p>User with this credentials doesn't exist</p>
        </form>
      </div>
    `);
  }
}
