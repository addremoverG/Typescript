import { HOST, PORT } from '../../public';

export const generalBody = (innerHtml: string) => {
  return `<body>
        <div class="flex-container">
        <div class="header_logo">
            <img src="/header.jpg" alt="Header">
        </div>
        <div class="navigation_bar">
            <nav class="menu">
                <ul>
                    <li><a href="http://${HOST}:${PORT}/" method="get">Home</a></li>
                    <li><a href="http://${HOST}:${PORT}/contacts" method="get">Contact</a></li>
                    <li><a href="http://${HOST}:${PORT}/map">Map</a></li>
                    <li><a href="http://${HOST}:${PORT}/company_history">Company history</a></li>
                    <li><a href="http://${HOST}:${PORT}/management">Management</a></li>
                    <li><a href="http://${HOST}:${PORT}/about">About us</a></li>
                    <li><a href="http://${HOST}:${PORT}/products">Products</a></li>
                    <li><a href="http://${HOST}:${PORT}/certificate">Certificate</a></li>
                    <li><a href="http://${HOST}:${PORT}/company_presentation">Company presentation</a></li>
                </ul>
            </nav>
        </div>
            ${innerHtml}
        <div class="footer">
            <span>You can contact the website administrator using <a href="mailto:abc@gmail.com">this addres</a></span>
        </div>
        </body>
        </html>`;
};
