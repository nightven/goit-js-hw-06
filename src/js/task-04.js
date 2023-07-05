const counter = document.querySelector("#counter");
const plusBtn = counter.lastElementChild;
const minusBtn = counter.firstElementChild;
const spanValue = counter.querySelector("#value");

let counterValue = 0;
plusBtn.addEventListener("click", () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
});

minusBtn.addEventListener("click", () => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
});
console.log(value);
