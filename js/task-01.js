const arrayLi = document.querySelectorAll(".item");
console.log(`Number of categories: ${arrayLi.length}`);

const arrayDetails = arrayLi.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.querySelectorAll("li").length}`);
});
