const container = document.querySelector(".container")
const button = document.querySelector("#button")

button.addEventListener("click", (event) => {
  event.preventDefault()

  const newNumber = parseInt(
    prompt("give the number of squares per side(max: 100): ")
  )

  if (newNumber < 101 && newNumber > 0) {
    resizeSquares(newNumber)
  } else {
    alert("Please enter a valid number!")
  }
})

function resizeSquares(numberSquares) {
  container.innerHTML = ""

  for (let i = 1; i <= numberSquares; i++) {
    const groupGrid = document.createElement("div")
    groupGrid.classList.add("group")

    for (let j = 1; j <= numberSquares; j++) {
      const grid = document.createElement("div")
      grid.classList.add("grid")

      grid.addEventListener("mouseenter", (event) => {
        event.target.style.cssText = "background-color: red;"
      })

      groupGrid.appendChild(grid)
    }

    container.appendChild(groupGrid)
  }
}

resizeSquares(16)
