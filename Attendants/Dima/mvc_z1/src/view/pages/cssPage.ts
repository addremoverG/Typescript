import { View } from '../abstractView';

export class CssPageView extends View {
  title: string = 'Css Page';

  innerBody: string = `
    <div class="css_page">
      <label for="navColor">Choose bar color:</label>
      <input type="color" id="navColor"/>
      <button type="button" id="applyNavColor">Apply</button>
    </div>
    <script scr="/index.js"></script>
  `;
}
