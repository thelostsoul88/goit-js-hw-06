function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const createEl = document.querySelector("[data-create]");
const destroyEl = document.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");

function createBoxes(amount) {
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.cssText = `width: ${size}px;
    height: ${size}px;
    background-color: ${getRandomHexColor()};`;
    size += 10;
    boxes.appendChild(div);
  }
}

createEl.addEventListener("click", () => {
  const amount = inputEl.value;
  createBoxes(amount);
});

destroyEl.addEventListener("click", () => {
  boxes.innerHTML = "";
});
