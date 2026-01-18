export class Views {
  private static fillTemplate(content: string, styles: string="") {
    return `
    <!DOCTYPE html>
		<html lang="en">
      <head>
        <title>Karolina -- Z1</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="styles.css">
        <style>
          ${styles}
        </style>
      </head>
      <body>
        <div class="topnav">
          <a href="/">Strona główna</a>
          <a href="/kontakt">Kontakt</a>
          <a href="/mapka">Mapka</a>
          <a href="/historia">Historia firmy</a>
          <a href="/zarzad">Zarząd firmy</a>
          <a href="/onas">Piszą o nas</a>
          <a href="/oferta">Oferta</a>
          <a href="/certyfikat">Certyfikat</a>
          <a href="/prezentacja">Prezentacja firmy</a>
        </div>

        <div class="content">
          ${content}
        </div>

        <footer class="row">
          <div class="column">Kontakt do administratora strony: </div>
          <div class="column" style="background-color:#bbb;">Gości: 
        </footer>
      </body>
		</html>
    `;
  } 

  static getMainPage() {
    return Views.fillTemplate(`
      <h2>LOGOWANIE</h2>
      <form action="http://localhost:3000/cred" method="get">
        <input type="text" id="firstName" name="fname" value="John">
        <input type="text" id="lastName" name="lname" value="Doe">
        <input type="submit" value="Zaloguj się">
      </form>
    `)
  }

  static getCredPage(fname: string, lname: string) {
    
    return Views.fillTemplate(`<h2>ZALOGOWANO</h2>
      <form action="http://localhost:3000/" method="get">
        <p>Name: ${fname}</p>
        <p>Surname: ${lname}</p>
        <input type="submit" value="Wyloguj się">
      </form>
		`);
  }

  static getMapPage() {
    return Views.fillTemplate(`
    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.3955867648674!2d21.0191417772349!3d52.18168177197448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471932d4e23b2a6f%3A0x4e4ccf52972c21d5!2sRTB%20House!5e0!3m2!1spl!2spl!4v1768769955640!5m2!1spl!2spl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    `.map {
      width: 90%;
      height: 100%;
      border: 0;
    }`);
  }

}
