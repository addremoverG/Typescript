export const kontakt = (data: Record<'create_time' | 'name', string>[]) => {
  return `<main>
            <div class="test">
              <table>
                <th>H1</th><th>H2</th>
                ${data.map((inner) => `<tr><td>${new Date(inner.create_time).toLocaleDateString('pl-PL')}</td><td>${inner.name}</td></tr>`).join()}
              </table>
            </div>
            <br />
          </main>`;
};
