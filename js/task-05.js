const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
inputEl.addEventListener("input", onInput);

function onInput(evt) {
  if (evt.currentTarget.value.trim() === "") {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = evt.currentTarget.value;
  }
}
