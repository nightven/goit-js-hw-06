const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const itemEl1 = document.createElement("li");
// itemEl1.textContent = ingredients[0];
// itemEl1.classList.add("item");
// const itemEl2 = document.createElement("li");
// itemEl2.textContent = ingredients[1];
// itemEl2.classList.add("item");
// const itemEl3 = document.createElement("li");
// itemEl3.textContent = ingredients[2];
// itemEl3.classList.add("item");
// const itemEl4 = document.createElement("li");
// itemEl4.textContent = ingredients[3];
// itemEl4.classList.add("item");
// const itemEl5 = document.createElement("li");
// itemEl5.textContent = ingredients[4];
// itemEl5.classList.add("item");
// const itemEl6 = document.createElement("li");
// itemEl6.textContent = ingredients[5];
// itemEl6.classList.add("item");

const listEl = document.querySelector("#ingredients");
// listEl.append(itemEl1, itemEl2, itemEl3, itemEl4, itemEl5, itemEl6);

const itemsEl = [];
for (let i = 0; i < 6; i++) {
  const item = document.createElement("li");
  item.textContent = ingredients[i];
  item.classList.add("item");
  itemsEl.push(item);
}
listEl.append(...itemsEl);
