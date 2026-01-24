import { View } from '../abstractView';

export class AboutPageView extends View {
  static title: string = 'About Page';
  static innerBody: string = `
  <div class="about_page">
  <h1>About info here</h1>
  </div>`;
}
