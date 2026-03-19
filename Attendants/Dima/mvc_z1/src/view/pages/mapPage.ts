import { View } from '../abstractView';

export class MapPageView extends View {
  title: string = 'Map Page';
  innerBody: string = `
  <div class="map_page">
  <h1>Map here</h1>
  </div>`;
}
