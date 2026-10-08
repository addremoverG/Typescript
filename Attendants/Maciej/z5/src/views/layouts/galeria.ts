const galerie: Record<string, string> = {
  standing: 'Postać stojąca',
  sitting: 'Postać siedząca',
  portraits: 'Portrety',
  interesting: 'Ciekawe',
  perspective: 'Perspektywy',
};

const zdjeciaNaStronie = 3;

export const galeriaContent = (
  data: any[],
  galeriaWybrana: string,
  sortuj: string,
  strona: number,
) => {
  const jestFormularzem = galeriaWybrana === 'dodaj';

  let dataPosortowane = [...data];
  if (sortuj === 'najnowsze') {
    dataPosortowane.sort((a, b) => b.idt - a.idt);
  } else {
    dataPosortowane.sort((a, b) => a.idt - b.idt);
  }

  const liczbaStron = Math.ceil(dataPosortowane.length / zdjeciaNaStronie) || 1;
  const start = (strona - 1) * zdjeciaNaStronie;
  const dataNaStronie = dataPosortowane.slice(start, start + zdjeciaNaStronie);

  return `
      <h1>Galeria zdjęć</h1>
      <div style="display:flex; gap:2rem;">
        <div style="min-width:150px;">
          ${Object.entries(galerie)
            .map(
              ([key, nazwa]) => `
            <div style="margin-bottom:8px;">
              <a href="/z1/galeria?galeria=${key}" style="text-decoration:none; ${
                key === galeriaWybrana ? 'font-weight:bold; color:#ff0000;' : 'color:#333;'
              }">${nazwa}</a>
            </div>`,
            )
            .join('')}

          <div style="margin-top:16px; padding-top:16px; border-top:1px solid #ddd;">
            <a href="/z1/galeria?galeria=dodaj" style="text-decoration:none; ${
              jestFormularzem ? 'font-weight:bold; color:#ff0000;' : 'color:#333;'
            }">Dodaj zdjęcie</a>
          </div>
        </div>

        <div style="flex:1;">
          ${
            jestFormularzem
              ? `
          <h3>Dodaj zdjęcie</h3>
          <form action="/z1/galeria/dodaj-zdjecie" method="POST" enctype="multipart/form-data" style="max-width:400px;">
            <div style="margin-bottom:1rem;">
              <label style="display:block; margin-bottom:4px; font-weight:bold;">Kategoria:</label>
              <select name="galeria" style="width:100%; padding:8px; font-size:1rem; border:1px solid #ccc; box-sizing:border-box;">
                ${Object.entries(galerie)
                  .map(([key, nazwa]) => `<option value="${key}">${nazwa}</option>`)
                  .join('')}
              </select>
            </div>
            <div style="margin-bottom:1rem;">
              <label style="display:block; margin-bottom:4px; font-weight:bold;">Wybierz zdjęcie:</label>
              <input type="file" name="zdjecie" accept="image/*" required>
            </div>
            <div style="margin-bottom:1rem;">
              <label style="display:block; margin-bottom:4px; font-weight:bold;">Komentarz:</label>
              <input type="text" name="komentarz" style="width:100%; padding:8px; font-size:1rem; border:1px solid #ccc; box-sizing:border-box;">
            </div>
            <button type="submit" style="padding:10px 24px; background-color:#333; color:white; border:none; font-size:1rem; cursor:pointer;">
              Dodaj zdjęcie
            </button>
          </form>`
              : `
          <div style="margin-bottom:16px;">
            <span style="font-weight:bold; margin-right:8px;">Sortuj:</span>
            <a href="/z1/galeria?galeria=${galeriaWybrana}&sortuj=najstarsze&strona=1" style="margin-right:12px; text-decoration:none; ${
              sortuj !== 'najnowsze' ? 'font-weight:bold; color:#ff0000;' : 'color:#333;'
            }">od najstarszych</a>
            <a href="/z1/galeria?galeria=${galeriaWybrana}&sortuj=najnowsze&strona=1" style="text-decoration:none; ${
              sortuj === 'najnowsze' ? 'font-weight:bold; color:#ff0000;' : 'color:#333;'
            }">od najnowszych</a>
          </div>

          <div class="photo-grid">
            ${dataNaStronie
              .map(
                (row) => `
            <div class="photo-item">
                <img src="/images/${row.link}" alt="${row.komentarz}">
                <p>${row.komentarz}</p>
                <form action="/z1/galeria/usun-zdjecie" method="POST" style="margin-top:6px;">
                  <input type="hidden" name="idt" value="${row.idt}">
                  <input type="hidden" name="galeria" value="${galeriaWybrana}">
                  <button type="submit" style="padding:4px 10px; background-color:#a11; color:white; border:none; font-size:0.85rem; cursor:pointer;">
                    Usuń
                  </button>
                </form>
            </div>`,
              )
              .join('')}
          </div>

          <div style="margin-top:16px;">
            ${
              strona > 1
                ? `<a href="/z1/galeria?galeria=${galeriaWybrana}&sortuj=${sortuj}&strona=${strona - 1}" style="margin-right:12px;">« Poprzednia</a>`
                : ''
            }
            <span>Strona ${strona} z ${liczbaStron}</span>
            ${
              strona < liczbaStron
                ? `<a href="/z1/galeria?galeria=${galeriaWybrana}&sortuj=${sortuj}&strona=${strona + 1}" style="margin-left:12px;">Następna »</a>`
                : ''
            }
          </div>`
          }
        </div>
      </div>
  `;
};