import { View } from '../abstractView';

export class ManagementPageView extends View {
  title: string = 'Management Page';
  innerBody: string = `
  <div class="management_page">
  <h1>Management info here</h1>
  </div>`;
}
