import { View } from '../abstractView';

export class DBPageView extends View {
  title: string = 'DB interaction';
  getBody(locals?: Record<string, any>): string {
    const users: { id: number; name: string; surname: string }[] =
      locals?.users ?? [];
    const rows = users
      .map(
        (user) => `
    <tr>
      <td>${user.id}</a></td>
      <td>${user.name}</td>
      <td>${user.surname}</td>
    </tr>`,
      )
      .join('');

    return `
    <div class="db_page">
    <h1>Here are the DB data:</h1>
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Surname</th>
      </tr>
      ${rows}
    </table>
  </div>`;
  }
}
