export const generalBody = (
  innerHtml: string,
  navColor: string = '#90ee90',
) => {
  return `<body>
        <div class="flex-container">
        <div class="header_logo">
            <img src="/header.jpg" alt="Header">
        </div>
        <div class="navigation_bar" style="background-color: ${navColor};">
            <nav class="menu">
                <ul>
                    <li><a href="/" method="get">Home</a></li>
                    <li><a href="/contacts" method="get">Contact</a></li>
                    <li><a href="/map">Map</a></li>
                    <li><a href="/company_history">Company history</a></li>
                    <li><a href="/management">Management</a></li>
                    <li><a href="/about">About us</a></li>
                    <li><a href="/dbdata/products/all">Products</a></li>
                    <li><a href="/certificate">Certificate</a></li>
                    <li><a href="/company_presentation">Company presentation</a></li>
                    <li><a href="/css">CSS Page</a></li>
                    <li><a href="/dbdata/users/all">DB data</a></li>
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
