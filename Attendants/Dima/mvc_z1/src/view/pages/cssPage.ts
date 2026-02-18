import { View } from '../abstractView';

export class CssPageView extends View {
  title: string = 'Css Page';

  innerBody: string = `
    <div class="css_page">
      <h3>Press here:</h3>
      <button type="button" id="myButton">Click Me!</button><br><br>
    </div>
  `;
}
