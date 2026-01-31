class Calc {
  display = document.getElementById("display");
  badNumbers = [
    1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 11, 21,
    31, 41, 51, 61, 71, 81, 91,
  ];
  test() {
    let live_cells = this.display.querySelectorAll(".alive");
    live_cells.forEach((cell) => {
      this.calc(cell);
    });
  }
  calc(cell) {
    this.cellNumber = parseInt(cell.classList[1]);
    this.neighbourCount = 0;
    this.state = "neutral";

    const neighbours = {
      top_left: {
        number: this.cellNumber - 11,
        elelemnt: this.display.children[this.cellNumber - 11],
        class: this.display.children[this.cellNumber - 12].classList[2],
      },
      top: {
        number: this.cellNumber - 10,
        element: this.display.children[this.cellNumber - 10],
        class: this.display.children[this.cellNumber - 11].classList[2],
      },
      top_right: {
        number: this.cellNumber - 9,
        element: this.display.children[this.cellNumber - 9],
        class: this.display.children[this.cellNumber - 9].classList[2],
      },
      bottom_left: {
        number: this.cellNumber + 9,
        element: this.display.children[this.cellNumber + 9],
        class: this.display.children[this.cellNumber + 8].classList[2],
      },
      bottom: {
        number: this.cellNumber + 10,
        element: this.display.children[this.cellNumber + 10],
        class: this.display.children[this.cellNumber + 9].classList[2],
      },
      bottom_right: {
        number: this.cellNumber + 11,
        element: this.display.children[this.cellNumber + 11],
        class: this.display.children[this.cellNumber + 10].classList[2],
      },
    };

    switch (true) {
      case neighbours.top_left.class === "alive" &&
        !this.badNumbers.includes(neighbours.top_left.number):
        this.neighbourCount++;
        break;
      case neighbours.top.class === "alive" &&
        !this.badNumbers.includes(neighbours.top.number):
        this.neighbourCount++;
        break;
      case neighbours.top_right.class === "alive" &&
        !this.badNumbers.includes(neighbours.top_right.number):
        this.neighbourCount++;
        break;
      case neighbours.bottom_right.class === "alive" &&
        !this.badNumbers.includes(neighbours.bottom_right.number):
        this.neighbourCount++;
        break;
      case neighbours.bottom.class === "alive" &&
        !this.badNumbers.includes(neighbours.bottom.number):
        this.neighbourCount++;
        break;
      case neighbours.bottom_right.class === "alive" &&
        !this.badNumbers.includes(neighbours.bottom_right.number):
        this.neighbourCount++;
        break;
    }
    console.log(this.neighbourCount);
  }

  update() {}
}

export default Calc;
