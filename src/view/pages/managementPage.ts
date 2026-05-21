import { View } from '../abstractView';

export class ManagementPageView extends View {
  title: string = 'Management Page';
  getBody(): string {
    return `  <div class="management_page">
  <h1>Management info here</h1>
  </div>`;
  }
}
