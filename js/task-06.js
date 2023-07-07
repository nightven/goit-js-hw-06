const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", validationInput);
const validLength = Number(inputEl.getAttribute("data-length"));

function validationInput(evt) {
  if (evt.currentTarget.value.trim().length === validLength) {
    toggleClasses("invalid", "valid");
  } else {
    toggleClasses("valid", "invalid");
  }
}
function toggleClasses(firstEl, secondEl) {
  inputEl.classList.remove(firstEl);
  inputEl.classList.add(secondEl);
}
