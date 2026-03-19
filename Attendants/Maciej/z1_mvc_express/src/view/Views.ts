export class Views {
  private static renderLayout(title: string, content: string): string {
    return `
      <!doctype html>
      <html lang="pl">
      <head>
          <meta charset="utf-8">    
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${title} - MacioPol</title>
          <link href="/styles.css" rel="stylesheet" type="text/css">
      </head>
      <body>
          <nav>
            <a href="/z1" class="logo">MacioPol</a>
            <div class="menu-links">
                <a href="/z1/oferta">Oferta</a>
                <a href="/z1/historia">Historia</a>
                <a href="/z1/zarzad">Zarząd</a>
                <a href="/z1/prezentacja">Prezentacja</a>
                <a href="/z1/certyfikat">Certyfikat</a>
                <a href="/z1/pisza-o-nas">Piszą o nas</a>
                <a href="/z1/mapa">Mapa</a>
                <a href="/z1/kontakt">Kontakt</a>
            </div>
          </nav>

          <div class="container">
            ${content}
          </div>
          
          <footer style="text-align: center; padding: 20px; color: #666;">
            &copy; 2025 MacioPol sp. z o.o.
          </footer>
      </body>
      </html>
    `;
  }

  static getHomePage() {
    return this.renderLayout('Strona Główna', `
      <h1>Witamy w MacioPol</h1>
      <p>Analityka danych, transport i spedycja.</p>
      <div style="text-align:center">
        <img src="/images/main.png" alt="main" style="max-width:100%;">
      </div>
    `);
  }

  static getOfferPage() {
    return this.renderLayout('Oferta', `
      <h1>Nasza Oferta</h1>
      <p>Oferujemy:</p>
      <ul>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
      </ul>
    `);
  }

  static getHistoryPage() {
    return this.renderLayout('Historia Firmy', `
      <h1>Nasza Historia</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    `);
  }

  static getBoardPage() {
    return this.renderLayout('Zarząd', `
      <h1>Nasz Zespół</h1>
      <div class="photo-grid">
        <div class="photo-item">
            <img src="/images/prezes.png" alt="Prezes">
            <h3>Maciej Kowalski</h3>
            <p>Prezes</p>
        </div>
        <div class="photo-item">
            <img src="/images/wiceprezes.png" alt="Wiceprezes">
            <h3>Janusz Nowak</h3>
            <p>Wiceprezes</p>
        </div>
      </div>
    `);
  }

  static getPresentationPage() {
    return this.renderLayout('Prezentacja', `
      <h1>Prezentacja Multimedialna</h1>
      <p>Lorem ipsum dolor sit amet</p>
      <div style="background: #eee; padding: 20px; text-align: center;">
         [jakieś wideo]
      </div>
    `);
  }

  static getCertificatePage() {
    return this.renderLayout('Certyfikaty', `
      <h1>Nasze Certyfikaty</h1>
      <p>Posiadamy certyfikat zajebistości.</p>
      <div style="border: 5px solid gold; padding: 20px; text-align: center; margin: 20px;">
        <h2>CERTYFIKAT ZAJEBISTOŚCI</h2>
        <p>Lorem Ipsum Dolor Sit Amet</p>
      </div>
    `);
  }

  static getMediaPage() {
    return this.renderLayout('Piszą o nas', `
      <h1>Piszą o nas</h1>
      </blockquote>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    `);
  }

  static getMapPage() {
    return this.renderLayout('Mapa', `
      <h1>Mapa</h1>
      <p>Zapraszamy do naszej siedziby.</p>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5082634.910745443!2d9.156503718820986!3d51.53604735608919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa16dd1d40efc418d%3A0x9b7156292e1f236!2smaciopol.net%20Maciej%20%C4%86wiakowski!5e0!3m2!1sen!2spl!4v1764771534648!5m2!1sen!2spl" 
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      <br><br>
      <a href="https://maps.app.goo.gl/CEDkirPCTSf5HYAA8" target="_blank" style="font-weight:bold; font-size:1.2em;">Otwórz w Google Maps &rarr;</a>
    `);
  }

  static getContactPage() {
    return this.renderLayout('Kontakt', `
      <h1>Skontaktuj się z nami</h1>
      <p>Adres: Ul. Maciowa 1, Warszawa</p>
      <p>Email: biuro@maciopol.pl</p>
      <p>Tel: +48 123 456 789</p>
    `);
  }
}