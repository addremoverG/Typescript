import { generateHTML } from './components/htmlBuilder';

export abstract class View {
  static renderPage(this: any): string {
    return generateHTML(this.title, this.innerBody);
  }
}
