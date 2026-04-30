import { View } from "../abstractView";
import { generateHTML } from "../components/htmlBuilder";

export class DBPageView extends View {
  title: string = "DB interaction";
  innerBody: string = "";

  renderPage(locals?: Record<string, any>): string {
    const users: { id: number; name: string; email: string }[] =
      locals?.users ?? [];
    const rows = users
      .map(
        (user) => `
    <tr>
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
    </tr>`,
      )
      .join("");

    const innerBody = `
  <div class="db_page">
    <h1>Here the DB data:</h1>
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
      ${rows}
    </table>
  </div>`;

    return generateHTML(this.title, innerBody, locals);
  }
}
