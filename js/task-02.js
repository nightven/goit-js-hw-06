const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");
const itemsEl = [];
for (let i = 0; i < ingredients.length; i++) {
  const item = document.createElement("li");
  item.textContent = ingredients[i];
  item.classList.add("item");
  itemsEl.push(item);
}
listEl.append(...itemsEl);
