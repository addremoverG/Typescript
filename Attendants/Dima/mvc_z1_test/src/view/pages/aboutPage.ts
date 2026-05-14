import { View } from '../abstractView';

export class AboutPageView extends View {
  title: string = 'About Page';
  getBody(): string {
    return `
  <div class="about_page">
  <h1>About info here</h1>
  </div>`;
}
}