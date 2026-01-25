import { View } from '../../interface';
import { mainContent, historyContent } from '../layouts/index';
import { SiteTemplate } from './SiteTemplate';

export class SiteBuilder extends SiteTemplate implements View {
  constructor(title: string) {
    super(title);
  }

  generateView(flag?: string): string {
    // throw new Error('Method not implemented.');
    return `
    <html lang="en">
      ${this.head}
      <body>
        <div>
          ${this.header}
        </div>

        ${flag ? historyContent() : mainContent()}

        ${this.footer}
      </body>
    </html>
    `;
  }
}

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
