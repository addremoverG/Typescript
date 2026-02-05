export const header = () => {
  return `<header>
            <div class="flex flex-center" id="logo"><a href="/"><img src="images/logo.png" width="350px"></a></div>
            <div id="menu" class="flex flex-row border border flex-gap bg-color" style="--gap: 30px;">
                <div>Kontakt</div>
                <div>Mapka</div>
                <div>Historia firmy</div>
                <div>Zarząd firmy</div>
                <div>Oferta</div>
                <div>Prezentacja firmy</div>
                <div><a href="/styles"><b>Wygląd</b></a></div>
            </div>
          </header>`;
};
