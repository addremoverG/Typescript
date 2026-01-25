import { footer, header, head } from '../partials/index';

export class SiteTemplate {
  protected head;
  protected header;
  protected footer;

  constructor(title: string) {
    this.head = head(title);
    this.footer = footer();
    this.header = header();
  }
}
