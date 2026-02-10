export class Views {
  private static pageTemplate(title: string, content: string): string {
    return `
      <!DOCTYPE html>
        <html lang="pl">
          <head>
              <meta charset="utf-8">    
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>${title}</title>
              <link href="/styles.css" rel="stylesheet" type="text/css">
          </head>
          <body>
            <div class="image-container">
              <img src="https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638882786/EducationHub/photos/sun-blasts-a-m66-flare.jpg" alt="Sample Image">
            </div>

            <!-- Menu -->
            <div class="menu">
              <a href="/home">Home</a>
              <a href="/about">About</a>
              <a href="/map">Map</a>
              <a href="/portfolio">Portfolio</a>
              <a href="/contact">Contact</a>
            </div>

            <!-- Content Section -->
            <div class="content">
              ${content}
            </div>
            
            <div class="footer">
              <p>Kontakt do administratora strony: <a href="mailto:mrc.matras@gmail.com">admin</a></p>
              <p>Licznik gości:</p>
              <script type="text/javascript" src="https://freevisitorcounters.com/en/home/counter/1449953/t/3"></script>
            </div>
          </body>
        </html>
    `;
  }

  static getHomePage(): string {
    return this.pageTemplate('Home Page', `
      <div id="home" class="content">
        <h2>Welcome to the Home Page</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    `)
  }
  
  static getAboutPage(): string {
    return this.pageTemplate('About Us Page', `
      <div id="about" class="content">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    `)
  }
  
  static getMapPage(): string {
    return this.pageTemplate('Map Page', `
      <div id="map" class="content">
        <h2>Our Services</h2>
        <iframe
          width="600"
          height="450"
          style="border:0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.037860918468!2d19.9328481!3d50.0541115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b6d053619f5%3A0xacb9dfc4d67fa598!2sZamek%20Kr%C3%B3lewski%20na%20Wawelu!5e0!3m2!1spl!2spl!4v1700000000000"
        >
        </iframe>
      </div>
    `)
  }
  
  static getPortfolioPage(): string {
    return this.pageTemplate('Portfolio Page', `
      <div id="portfolio" class="content">
        <h2>Portfolio</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    `)
  }
  
  static getContactPage(): string {
    return this.pageTemplate('Contact Page', `
      <div id="contact" class="content">
        <h2>Contact Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Email: <a href="mailto:mrc.matras@gmail.com">mrc.matras@gmail.com</a></p>
        <p>Telefon: <a href="tel:+48 792 871 631">+48 792 xxx xxx</a></p>
        <p>Adres: Wawel, Kraków 30-001</p>
      </div>
    `)
  }
}