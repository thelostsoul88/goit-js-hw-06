const input = document.getElementById("font-size-control");
const txt = document.getElementById("text");
// ------------------- function in ----------------
// input.addEventListener("input", (e) => {
//   txt.style.fontSize = e.currentTarget.value + "px";
// });
// ------------------- function out ---------------
input.addEventListener("input", handle);
function handle(e) {
  txt.style.fontSize = `${e.currentTarget.value}px`;
}
