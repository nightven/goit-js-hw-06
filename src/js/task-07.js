const inputEL = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
inputEL.addEventListener("input", resizeOut);

function resizeOut(evt) {
  let sizeText = evt.currentTarget.value;
  textEl.style.fontSize = `${sizeText}px`;
}
