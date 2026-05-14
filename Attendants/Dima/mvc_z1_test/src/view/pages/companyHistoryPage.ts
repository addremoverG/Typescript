import { View } from '../abstractView';

export class CompanyHistoryPageView extends View {
  title: string = 'Company History Page';
  getBody(): string {
    return `
  <div class="company_history_page">
  <h1>Company history here</h1>
  </div>`;
}
}