import Manual from "./control.js";

const display = document.getElementById("display");
// Creatting board.
for (let i = 1; i <= 100; i++) {
  let div = document.createElement("div");
  div.classList.add(1);
  display.append(div);
}

console.log(display.childElementCount);
