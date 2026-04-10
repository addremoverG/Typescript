// document.addEventListener('click', (e) => {
//   if (e.target.dataset.color) {
//     e.target.style.backgroundColor = e.target.dataset.color;
//   }
// });
document.addEventListener('click', async (e) => {
  if (e.target.dataset.color) {
    const newColor = e.target.dataset.color;

    // 1. Onclick change
    e.target.style.backgroundColor = e.target.dataset.color;

    // 2. "Trigger" - session
    await fetch('/save-color', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ color: newColor }),
    });
  }
});
