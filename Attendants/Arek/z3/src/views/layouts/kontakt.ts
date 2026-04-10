export const kontakt = (data: Record<'create_time' | 'name', string>[]) => {
  return `<main>
            <div class="test">
              <table>
                <th>H1</th><th>H2</th>
                ${data.map((inner) => `<tr><td>${inner.create_time}</td><td>${inner.name}</td></tr>`).join()}
              </table>
            </div>
            <br />
          </main>`;
};
