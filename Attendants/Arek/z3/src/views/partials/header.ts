export const header = (sessionAuthorise: string | undefined) => {
  return `<header>
            <div id="logo"><a href="http://localhost:3000/"><img src="images/download.png" width="50%"></a></div>
            <div id="menu">
                ${!sessionAuthorise ? `<div class="menu"><a href="http://localhost:3000/login">Login</a></div>` : ''}
                <div class="menu"><a href="http://localhost:3000/kontakt">Kontakt</a></div>
                <div class="menu">Mapka</div>
                <div class="menu"><a href="http://localhost:3000/historia_firmy">Historia firmy</a></div>
                <div class="menu">Zarząd firmy</div>
                <div class="menu">Piszą o nas</div>
                <div class="menu">Oferta</div>
                <div class="menu">Certyfikat</div>
                <div class="menu">Prezentacja firmy</div>
                <div class="menu"><a href="http://localhost:3000/api/data">getApiData</a></div>
                <div class="menu"><a href="http://localhost:3000/css">CSS</a></div>
                ${sessionAuthorise ? `<div class="menu"><a href="/logout">Witaj ${sessionAuthorise}, wyloguj </a></div>` : ''}
            </div>
        </header>`;
};
