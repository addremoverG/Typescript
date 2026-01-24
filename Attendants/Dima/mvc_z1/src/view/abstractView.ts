export  abstract class View{
    abstract title: string;
    abstract bodyElement: string

    renderPage() : string{
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${this.title}</title>
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
            ${this.bodyElement}
        <div class="footer">
            <span>You can contact the website administrator using <a href="mailto:abc@gmail.com">this addres</a></span>
        </div>
        </body>
        </html>        
        `
    }
}