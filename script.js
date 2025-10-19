const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");
});
// Hiệu ứng hoa rơi
function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');

  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration = Math.random() * 3 + 4 + 's';
  flower.style.opacity = Math.random() * 0.8 + 0.2;
  flower.style.transform = `scale(${Math.random() * 0.6 + 0.4})`;

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 7000);
}

setInterval(createFlower, 200);
