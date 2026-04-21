import { footer, header, head } from '../partials/index';

export class SiteTemplate {
  protected head;
  protected header;
  protected footer;

  constructor(title: string, sessionColor?: string, sessionAuthorise?: string) {
    this.head = head(title);
    this.header = header(sessionAuthorise);
    this.footer = footer(sessionColor);
  }
}
