const colorInput = document.getElementById('navColor');
const applyNavColorDtn = document.getElementById('applyNavColor');
const navigationBar = document.querySelector('.navigation_bar');

function loadNavColor() {
  const localColor = localStorage.getItem('navBarColor');
  if (!localColor) {
    loadColorFromServer();
  } else {
    applyNavBarColor(localColor);
  }
}

async function loadColorFromServer() {
  const res = await fetch('/api/color');
  const { color } = await res.json();
  localStorage.setItem('navBarColor', color);
  applyNavBarColor(color);
}

function applyNavBarColor(color) {
  navigationBar.style.backgroundColor = color;
}

if (applyNavColorDtn) {
  applyNavColorDtn.addEventListener('click', async () => {
    const req = fetch('/api/color', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ color: colorInput.value }),
    });
    localStorage.setItem('navBarColor', colorInput.value);
    applyNavBarColor(colorInput.value);
  });
}

loadNavColor();
