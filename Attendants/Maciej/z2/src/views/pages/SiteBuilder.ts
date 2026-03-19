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
  appearanceContent
} from '../layouts/index';

export class SiteBuilder extends SiteTemplate implements View {
  constructor(title: string) {
    super(title);
  }

  generateView(flag?: string, bgColor?: string): string {
    let content = mainContent();

    if (flag === 'offer') {
      content = offerContent();
    } else if (flag === 'history') {
      content = historyContent();
    } else if (flag === 'board') {
      content = boardContent();
    } else if (flag === 'presentation') {
      content = presentationContent();
    } else if (flag === 'certificate') {
      content = certificateContent();
    } else if (flag === 'media') {
      content = mediaContent();
    } else if (flag === 'map') {
      content = mapContent();
    } else if (flag === 'contact') {
      content = contactContent();
    } else if (flag === 'appearance') {
      content = appearanceContent(); 
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