function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtnEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");
const bodyColor = document.querySelector("body");
changeColorBtnEl.addEventListener("click", onClick);
function onClick(evt) {
  const color = getRandomHexColor();
  bodyColor.style.backgroundColor = color;
  colorEl.textContent = color;
}
