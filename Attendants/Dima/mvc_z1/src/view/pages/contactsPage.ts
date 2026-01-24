import { View } from '../abstractView';

export class ContactsPageView extends View {
  static title: string = 'Contacts Page';
  static innerBody: string = `
  <div class="contacts_page">
  <h1>Contacts here</h1>
  </div>`;
}
