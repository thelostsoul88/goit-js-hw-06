const counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");
// -------------------------- function out ----------------------
const decrementClick = () => {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
};
decrementBtn.addEventListener("click", decrementClick);

const incrementClick = () => {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
};
incrementBtn.addEventListener("click", incrementClick);
// --------------------------- function in -----------------------
// decrementBtn.addEventListener("click", function () {
//   counterValue.decrement();
//   valueEl.textContent = counterValue.value;
// });
// incrementBtn.addEventListener("click", function () {
//   counterValue.increment();
//   valueEl.textContent = counterValue.value;
// });
