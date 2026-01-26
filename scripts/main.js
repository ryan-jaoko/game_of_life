const display = document.getElementById("display")

// Create display
for (let i = 1; i <= 100; i++) {
  const cell = document.createElement('div')
  cell.classList.add("cell", i)
  display.appendChild(cell)
}


addEventListener("click", (e) => {
  let elementClicked = document.elementFromPoint(e.x, e.y)
  if (elementClicked.classList.contains('alive')) {
    elementClicked.classList.remove('alive')
  }

  else if (elementClicked.classList[0] === 'cell') {
    elementClicked.classList.add('alive')
  }

})

const play_sequence = () => {
  let liveCells = document.getElementsByClassName('alive')

  lifeDeathCalc(liveCells)
};
document.getElementById('play').addEventListener('click', () => {
  play_sequence()
})

function lifeDeathCalc(cells) {
  let ignoreNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 20, 30, 40, 50, 60, 70, 80, 90,
    11, 21, 31, 41, 51, 61, 71, 81, 91
  ]
  let i = 0;
  let neighbours = 0
  let cellStatus = null
  while (cells[i] !== undefined) {
    let cellnumber = cells[i].classList[1]


    if (neighbours <= 2) {
      cells[i].classList.add('underpopulation')
    } else if (neighbours > 3) {
      cells[i].classList.add('overpopulation')
    } else if (neighbours === 3) {
      cells[i].classList.add('survive')
    }

    console.log(ignoreNumbers.includes(cellnumber))
    switch (true) {
      //top neighbours
      case display.children[cellnumber - 10].includes('alive') && !ignoreNumbers.contains(cellnumber - 10):
        neighbours++
        break;
    }
    i++
    console.log(neighbours)
    neighbours = 0

    cellStatus = null
  }
}
function updateGame() {

}

