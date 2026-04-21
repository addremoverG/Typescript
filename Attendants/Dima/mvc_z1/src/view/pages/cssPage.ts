import { View } from '../abstractView';

export class CssPageView extends View {
  title: string = 'Css Page';

  innerBody: string = `
    <div class="color-picker-container">
      <form action="/set-color" method="POST" style="display: flex; gap: 10px; align-items: center;">
        <label for="navColor">Choose bar color:</label>
        <input type="color" id="navColor" name="color" />
        <button type="submit">Apply</button>
      </form>
    </div>
  `;
}
