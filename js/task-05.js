const txtInput = document.getElementById("name-input");
const txtOutput = document.getElementById("name-output");

txtInput.addEventListener("input", (e) => {
  txtOutput.textContent = e.currentTarget.value || "Anonymous";
});
// -----------------------------------------------------------
// const put = {
//   input: document.getElementById("name-input"),
//   output: document.getElementById("name-output"),
// };
// put.input.addEventListener("input", handle);
// function handle(e) {
//   put.output.textContent = e.currentTarget.value || "Anonymous";
// }
