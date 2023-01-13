const input = document.getElementById("validation-input");
// --------------------------- function in -------------------------
// input.addEventListener("blur", (e) => {
//   if (e.currentTarget.value.length == input.dataset.length) {
//     input.classList.add("valid");
//     input.classList.remove("invalid");
//   } else {
//     input.classList.add("invalid");
//     input.classList.remove("valid");
//   }
// });
// --------------------------- function out --------------------------
input.addEventListener("blur", handle);
function handle(e) {
  if (e.currentTarget.value.length == input.dataset.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
