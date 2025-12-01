import express from 'express';

(async (): Promise<void> => {
  const server = express();
  const port = Number(process.env.PORT) || 3000;

  server.get('/', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
      <style>
        .image-container {
            width: 100%;
            height: 200px;
            border: 1px outset black;
            overflow: hidden;  /* Hide overflow if image is larger */
        }

        .image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .menu {
            border: 1px outset black;
            text-decoration: none;  /* Remove underlines */
            padding: 10px 20px;     /* Add space around the text */
            font-size: 16px;
            transition: background-color 0.3s; /* Smooth transition on hover */
            text-align: center;
            background: light grey;
        }

        .content {
            border: 1px outset black;
            display: none;
            padding: 20px;
        }

        .active {
            display: block;
        }

        .footer {
            border: 1px outset black;
            text-decoration: none;  /* Remove underlines */
            font-size: 16px;
            transition: background-color 0.3s; /* Smooth transition on hover */
            text-align: center;
        }
      </style>
      </head>
      <body>
        <div class="image-container">
            <img src="https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638882786/EducationHub/photos/sun-blasts-a-m66-flare.jpg" alt="Sun head">
        </div>

        <!-- Menu -->
        <div class="menu">
            <a href="javascript:void(0)" onclick="showContent('home')">Home</a>
            <a href="javascript:void(0)" onclick="showContent('about')">About</a>
            <a href="javascript:void(0)" onclick="showContent('map')">Map</a>
            <a href="javascript:void(0)" onclick="showContent('portfolio')">Portfolio</a>
            <a href="javascript:void(0)" onclick="showContent('contact')">Contact</a>
        </div>

        <!-- Content Section -->
        <div id="home" class="content">
            <h2>Welcome to the Home Page</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div id="about" class="content">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div id="map" class="content">
            <h2>Map</h2>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10247.534251702551!2d19.93829629149467!3d50.05101247027485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b6d053619f5%3A0xacb9dfc4d67fa598!2sZamek%20Kr%C3%B3lewski%20na%20Wawelu%20%E2%80%93%20Pa%C5%84stwowe%20Zbiory%20Sztuki!5e0!3m2!1spl!2spl!4v1764572524684!5m2!1spl!2spl"
              width="600" 
              height="450" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>        
        </div>
        <div id="portfolio" class="content">
            <h2>Portfolio</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div id="contact" class="content">
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <script>
            // Function to show the content based on menu item clicked
            function showContent(section) {
            // Hide all content sections
            var sections = document.querySelectorAll('.content');
            sections.forEach(function(section) {
                section.classList.remove('active');
            });

            // Show the clicked section
            var activeSection = document.getElementById(section);
            if (activeSection) {
                activeSection.classList.add('active');
            }
            }

            // Optionally, show the "Home" section by default
            window.onload = function() {
            showContent('home');
            };
        </script>

        <div class="footer">
            <p>Kontakt do administratora strony: <a href="mailto:mrc.matras@gmail.com">admin</a></p>
            <p>Licznik gości:</p>
            <script type="text/javascript" src="https://freevisitorcounters.com/en/home/counter/1449953/t/3"></script>
        </div>

      </body>
      </html>
    `);
  });

  server.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
})().catch((err) => {
  console.log(err instanceof Error ? err.message : err);
  // process.exit(1);
});
