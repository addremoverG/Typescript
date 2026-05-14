export const header = (user?: string | null) => {
  return `<nav>
            <a href="/z1" class="logo">MacioPol</a>
            <div class="menu-links">
                <a href="/z1/oferta">Oferta</a>
                <a href="/z1/historia">Historia</a>
                <a href="/z1/zarzad">Zarząd</a>
                <a href="/z1/prezentacja">Prezentacja</a>
                <a href="/z1/certyfikat">Certyfikat</a>
                <a href="/z1/pisza-o-nas">Piszą o nas</a>
                <a href="/z1/mapa">Mapa</a>
                <a href="/z1/kontakt">Kontakt</a>
                <a href="/z1/baza">Baza</a>
                <a href="/z1/wyglad">Wygląd</a>
                ${user
                  ? `<a href="/z1/logout">Witaj, ${user} (wyloguj)</a>`
                  : `<a href="/z1/login">Zaloguj</a>`
                }
            </div>
          </nav>`;
};