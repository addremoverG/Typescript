import { View } from '../../interface';
import { mainContent, historyContent, css, login } from '../layouts/index';
import { SiteTemplate } from './SiteTemplate';

export class SiteBuilder extends SiteTemplate implements View {
  private layoutMapper = {
    history: historyContent,
    css: css,
    main: mainContent,
    login: login,
  };

  constructor(title: string, sessionColor?: string, sessionAuthorise?: string) {
    super(title, sessionColor, sessionAuthorise);
  }

  generateView(flag: string = 'main'): string {
    // throw new Error('Method not implemented.');
    return `
    <html lang="en">
      ${this.head}
      <body>
        <div>
          ${this.header}
        </div>

        ${
          /*flag ? this.layoutMapper[flag as keyof typeof this.layoutMapper]()  : mainContent()*/
          /*historyContent()*/
          this.layoutMapper[flag as keyof typeof this.layoutMapper]()
        }
        
        ${this.footer}

        <script src="/js/colorChanger.js" defer></script>

      </body>
    </html>
    `;
  }
}

// <script>

//         document.addEventListener('click', (e) => {
//           if (e.target.dataset.color) {
//             e.target.style.backgroundColor = e.target.dataset.color;
//           }
//         });

//         // const element = document.getElementById('firstJs');
//         // const element = document.getElementById('secondJs');
//         // const element = document.getElementById('thirdJs');
//         // const element2 = document.getElementsByClassName('menu');

//         // async function change(conf){
//         //   document.getElementById(conf.id).addEventListener('click', function(){this.style.backgroundColor = conf.color});
//         // }

//         // change({id: "firstJs", color: "blue" });
//         // change({id: "secondJs", color: "red" });
//         // change({id: "thirdJs", color: "yellow" });

//         // element.addEventListener('click', function() {
//             // Case 1: Switch the CSS class (Recommended)
//             // this.classList.toggle('active');

//             // Case 2: Direct style change
//             // this.style.backgroundColor = "blue";

//         // });

//         </script>

// export const main = `
// <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="styles.css">
//     <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
//     <title>Main Page</title>
//   </head>
//   <body>
//     <div>
//       ${header}
//     </div>

//     ${mainContent}

//     ${footer}
//   </body>
// </html>
// `;

// <!DOCTYPE html>
// <html>
// <head>
//     <style>
//         .box {
//             width: 200px;
//             padding: 50px;
//             background-color: lightgrey;
//             cursor: pointer;
//             transition: background-color 0.3s; /* Płynna zmiana koloru */
//         }
//         /* Nowy wygląd po kliknięciu */
//         .active {
//             background-color: tomato;
//             color: white;
//         }
//     </style>
// </head>
// <body>

//     <div id="mojDiv" class="box">Kliknij mnie, aby zmienić kolor!</div>

//     <!-- MIEJSCE NA JS: Przed końcem body -->
//     <script>
//         const element = document.getElementById('mojDiv');

//         element.addEventListener('click', function() {
//             // Sposób 1: Przełączanie klasy CSS (ZALECANE)
//             this.classList.toggle('active');

//             // Sposób 2: Bezpośrednia zmiana stylu
//             // this.style.backgroundColor = "blue";
//         });
//     </script>

// </body>
// </html>
