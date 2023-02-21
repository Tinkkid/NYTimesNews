footerEl = document.querySelector('footer');
export default function footerJs() {
  console.log(footerEl.firstElementChild);
  setInterval(getRandomHexColor, 5000);
}

function getRandomHexColor() {
  footerEl.firstElementChild.firstElementChild.style.color = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
}
