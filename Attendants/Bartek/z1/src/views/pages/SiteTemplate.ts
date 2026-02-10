import { head, header, footer } from '../partials/index';

export class SiteTemplate {
  protected head;
  protected header;
  protected footer;

  constructor(title: string) {
    this.head = head(title);
    this.header = header();
    this.footer = footer();
  }
}
