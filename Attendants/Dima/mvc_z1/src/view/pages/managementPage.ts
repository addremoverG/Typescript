import { View } from '../abstractView';

export class ManagementPageView extends View {
  static title: string = 'Management Page';
  static innerBody: string = `
  <div class="management_page">
  <h1>Management info here</h1>
  </div>`;
}
