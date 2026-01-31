import Calc from "./calc.js";

const display = document.getElementById("display");

// Create cells
for (let i = 1; i <= 100; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell", i);
  display.appendChild(cell);
}

//Manul state change
addEventListener("click", (e) => {
  let elementClicked = document.elementFromPoint(e.x, e.y);
  if (elementClicked.classList.contains("alive")) {
    elementClicked.classList.remove("alive");
  } else if (elementClicked.classList[0] === "cell") {
    elementClicked.classList.add("alive");
  }
});
let test = new Calc();
document.getElementById("play").addEventListener("click", () => {
  test.test();
});
