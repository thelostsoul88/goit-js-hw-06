const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addUl = document.getElementById("ingredients");
// -----------------------FOR-----------------------
const array = [];
for (const ingredient of ingredients) {
  const elemLi = document.createElement("li");
  elemLi.textContent = ingredient;
  elemLi.classList.add("item");
  array.push(elemLi);
}
addUl.append(...array);

// -----------------------MAP--------------------
// const array = ingredients.map((ingredient) => {
//   const elemLi = document.createElement("li");
//   elemLi.textContent = ingredient;
//   elemLi.classList.add("item");
//   return elemLi;
// });
// addUl.append(...array);
