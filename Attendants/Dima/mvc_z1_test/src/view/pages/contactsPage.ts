import { View } from '../abstractView';

export class ContactsPageView extends View {
  title: string = 'Contacts Page';
  getBody(): string {
    return `
  <div class="contacts_page">
  <h1>Contacts here</h1>
  </div>`;
}
}