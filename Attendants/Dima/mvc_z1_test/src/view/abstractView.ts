import { generateHTML } from "./components/htmlBuilder";

export abstract class View {
  abstract title: string;
  abstract getBody(locals?: Record<string, any>): string;

  renderPage(locals?: Record<string, any>): string {
    return generateHTML(this.title, this.getBody(locals), locals);
  }
}
