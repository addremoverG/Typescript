import { SiteTemplate } from './SiteTemplate';
import { View } from '../../interface';
import { mainPage } from '../layouts';

export class SiteBuilder extends SiteTemplate implements View {
  constructor(title: string) {
    super(title);
  }

  generateView(flag?: string): string {
    return `
    <html lang='en'>
      ${this.head}
      <body>
      <div class="flex flex-col">
      ${this.header}
      ${!flag ? mainPage() : '<p>Test</p>'}
      ${this.footer}
      </div>
      </body>
    </html>
    `;
  }
}
