import { generateHTML } from './components/htmlBuilder';

export abstract class View {
  abstract title: string;
  abstract innerBody: string;

  renderPage(): string {
    return generateHTML(this.title, this.innerBody);
  }
}
