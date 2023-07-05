function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const containerEl = document.querySelector("#controls");
const inputEl = containerEl.children[0];
const createBtn = containerEl.children[1];
const destroyBtn = containerEl.children[2];
const divBoxesEl = document.querySelector("#boxes");

createBtn.addEventListener("click", onClick);

function onClick(evt) {
  createBox(inputEl.value);
}

destroyBtn.addEventListener("click", onDestroy);

function onDestroy(evt) {
  [...divBoxesEl.children].forEach((el) => el.remove());
  inputEl.value = "";
}

function createBox(amount) {
  let side = 10;
  const array = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const color = getRandomHexColor();
    box.style.width = `${side}px`;
    box.style.height = `${side}px`;
    box.style.backgroundColor = color;
    array.push(box);
    side += 10;
  }
  divBoxesEl.append(...array);
}
