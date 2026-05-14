import { View } from '../abstractView';

export class CompanyPresentationPageView extends View {
  title: string = 'Company Presentation Page';
  getBody(): string {
    return `
  <div class="company_presentation_page">
  <h1>Company presentation here</h1>
  </div>`;
}
}