export const bazaContent = (data: any[]) => {
  return `
    <main>
      <h1>Baza danych</h1>
      <table class="db-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Nazwa</th>
          </tr>
        </thead>
        <tbody>
          ${data
            .map(
              (row) => `
            <tr>
              <td>${row.id}</td>
              <td>${new Date(row.create_time).toLocaleDateString('pl-PL')}</td>
              <td>${row.name}</td>
            </tr>`
            )
            .join('')}
        </tbody>
      </table>
    </main>
  `;
};