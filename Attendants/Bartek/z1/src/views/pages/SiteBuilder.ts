import { SiteTemplate } from './SiteTemplate';
import { View } from '../../interface';
import { mainPage, stylesPage } from '../layouts';

export class SiteBuilder extends SiteTemplate implements View {
  constructor(title: string) {
    super(title);
  }

  generateView(flag?: string): string {
    return `
    <html lang='en'>
    <script src="script.js" type="module" defer></script>
    ${this.head}
    <body>
      <div class="flex flex-col">
      ${this.header}
      ${!flag ? mainPage() : stylesPage()}
      ${this.footer}
      </div>
      
      </body>
    </html>
    `;
  }
}
