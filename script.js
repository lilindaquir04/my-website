document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('colorBtn');
  const body = document.body;

  const colors = ['#ffeaa7', '#fab1a0', '#fd79a8', '#6c5ce7', '#00b894', '#fdcb6e'];

  button.addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
  });
});
