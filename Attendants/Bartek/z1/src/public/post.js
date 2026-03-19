const colorForm = document.getElementById('colorForm');
const colorPicker = document.getElementById('background');

async function getCurrentBgColor() {
  const response = await fetch('/bg-settings');
  const data = await response.json();
  if (data.color) {
    colorPicker.value = data.color;
  }
}

colorForm.addEventListener('change', async (e) => {
  e.preventDefault();

  const color = colorPicker.value;
  const endpoint = '/save-color';

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ color: color }),
  });

  if (response.ok) {
    window.location.reload();
  }
});

getCurrentBgColor();
