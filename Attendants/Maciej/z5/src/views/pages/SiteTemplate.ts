import { footer, header, head } from '../partials/index';

export class SiteTemplate {
  protected head;
  protected header;
  protected footer;

  constructor(title: string, user?: string | null) {
    this.head = head(title);
    this.footer = footer();
    this.header = header(user);
  }
}
