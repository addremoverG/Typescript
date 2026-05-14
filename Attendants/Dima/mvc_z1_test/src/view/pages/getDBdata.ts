import { View } from "../abstractView";

export class DBPageView extends View {
  title: string = "DB interaction";

  getBody(locals?: Record<string, any>): string {
    const users: { id: number; name: string; email: string }[] =
      locals?.users ?? [];
    const rows = users
      .map(
        (user) => `
    <tr>
      <td>${user.id}</td><td>${user.name}</td><td>${user.email}</td>
    </tr>`,
      )
      .join("");

    return `
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
  }
}
