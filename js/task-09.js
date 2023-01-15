function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const body = document.querySelector("body");
// --------------------- function in --------------
colorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
});
// --------------------- function out -------------
// colorBtn.addEventListener("click", handleColor);
// function handleColor() {
//   const randomColors = getRandomHexColor();
//   body.style.backgroundColor = randomColors;
//   spanColor.textContent = randomColors;
// }
