window.onload = async () => {
  const response = await fetch('/bg-settings');
  const data = await response.json();

  if (data.color) {
    document.body.style.backgroundColor = data.color;
  }
};
