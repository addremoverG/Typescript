import { View } from '../../interface/interface';
import { SiteTemplate } from './SiteTemplate';
import {
  mainContent,
  historyContent,
  offerContent,
  boardContent,
  presentationContent,
  certificateContent,
  mediaContent,
  mapContent,
  contactContent,
  appearanceContent,
  loginContent,
  bazaContent,
} from '../layouts/index';

export class SiteBuilder extends SiteTemplate implements View {
  constructor(title: string, user?: string | null) {
    super(title, user);
  }

  generateView(flag?: string, bgColor?: string, data?: any[]): string {
    const layoutMapper: Record<string, () => string> = {
      home: mainContent,
      offer: offerContent,
      history: historyContent,
      board: boardContent,
      presentation: presentationContent,
      certificate: certificateContent,
      media: mediaContent,
      map: mapContent,
      contact: contactContent,
      appearance: appearanceContent,
      login: loginContent,
    };

    let content: string;

    if (flag === 'baza' && data) {
      content = bazaContent(data);
    } else if (flag && layoutMapper[flag]) {
      content = layoutMapper[flag]();
    } else {
      content = mainContent();
    }

    const bodyStyle = bgColor ? `style="background-color: ${bgColor};"` : '';

    return `
    <!doctype html>
    <html lang="pl">
      ${this.head}
      <body ${bodyStyle}>
        ${this.header}
        <div class="container">
          ${content}
        </div>
        ${this.footer}
      </body>
    </html>
    `;
  }
}