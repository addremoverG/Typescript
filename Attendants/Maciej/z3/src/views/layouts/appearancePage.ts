export const appearanceContent = () => {
  return `
      <h1>Wygląd</h1>
      
      <h3>Przyciski</h3>
      <div>
          <button class="js-color-btn" style="padding:10px; margin:5px; cursor:pointer;">Naciśnij aby zmienić kolor</button>
          <button class="js-color-btn" style="padding:10px; margin:5px; cursor:pointer;">Naciśnij aby zmienić kolor</button>
          <button class="js-color-btn" style="padding:10px; margin:5px; cursor:pointer;">Naciśnij aby zmienić kolor</button>
      </div>

      <hr style="margin: 30px 0;">

      <h3>Kolor tła strony</h3>
      <form action="/z1/zmien-tlo" method="POST">
          <button type="submit" style="padding:10px 20px; font-weight:bold; cursor:pointer; background-color:#333; color:white; border:none;">
              Zmień kolor tła
          </button>
      </form>

      <script src="/js/colorchanger.js"></script>
  `;
};