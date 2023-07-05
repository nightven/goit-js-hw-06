const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", validationInput);
const validLength = inputEl.getAttribute("data-length");
console.log(validLength);

function validationInput(evt) {
  if (evt.currentTarget.value.length == validLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
  if (evt.currentTarget.value.length == "") {
    inputEl.classList.remove("invalid", "valid");
  }
}
