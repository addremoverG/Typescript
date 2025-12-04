export class Views {
  private static showInBody(title: string, htmlElement: string) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
        <div class="flex-container">
        <div class="header_logo">
            <img src="header.jpg" alt="Header">
        </div>
        <div class="navigation_bar">
            <nav class="menu">
                <ul>
                    <li><a href="http://localhost:3000/" method="get">Home</a></li>
                    <li><a href="http://localhost:3000/contacts" method="get">Contact</a></li>
                    <li><a href="http://localhost:3000/map">Map</a></li>
                    <li><a href="http://localhost:3000/company_history">Company history</a></li>
                    <li><a href="http://localhost:3000/management">Management</a></li>
                    <li><a href="http://localhost:3000/about">About us</a></li>
                    <li><a href="http://localhost:3000/products">Products</a></li>
                    <li><a href="http://localhost:3000/certificate">Certificate</a></li>
                    <li><a href="http://localhost:3000/company_presentation">Company presentation</a></li>
                </ul>
            </nav>
        </div>
            ${htmlElement}
        <div class="footer">
            <span>You can contact the website administrator using <a href="mailto:abc@gmail.com">this addres</a></span>
        </div>
        </body>
        </html>
        `;
  }

  static getMainPage() {
    return this.showInBody(
      "Main Page",
      `
        <div class="map_and_contact_info">
            <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2333.7583325476376!2d16.185549876318607!3d54.202062972549804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4701cd6afa96748d%3A0xe19f6803f15ed08c!2sWa%C5%84kowicza%2010%2C%2075-445%20Koszalin!5e0!3m2!1sen!2spl!4v1757091415294!5m2!1sen!2spl" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="contact_info">
            <p>Koszalin, ul.Wańkowicza, 10</p>
            <p>Some other contact data</p>
            <p>Email: <a href="mailto:abc@gmail.com">abc@gmail.com</a></p>
            </div>
        </div>
    `
    );
  }

  static getContactPage() {
    return this.showInBody(
      "Contacts",
      `
          <div class="contacts_page">

          </div>
    `
    );
  }

  static getMapPage() {
    return this.showInBody(
      "Map",
      `
          <div class="map_page">

          </div>
    `
    );
  }

  static getCompanyHistoryPage() {
    return this.showInBody(
      "Company History",
      `
          <div class="company_history_page">

          </div>
    `
    );
  }

  static getManagementPage() {
    return this.showInBody(
      "Management",
      `
          <div class="management_page">

          </div>
    `
    );
  }

  static getAboutPage() {
    return this.showInBody(
      "About",
      `
          <div class="about_page">

          </div>
    `
    );
  }

  static getProductsPage() {
    return this.showInBody(
      "Products",
      `
          <div class="products_page">

          </div>
    `
    );
  }

  static getCertificatePage() {
    return this.showInBody(
      "Certificate",
      `
          <div class="certificate_page">

          </div>
    `
    );
  }

  static getCompanyPresentationPage() {
    return this.showInBody(
      "Company Presentation",
      `
          <div class="company_presentation_page">

          </div>
    `
    );
  }
}
