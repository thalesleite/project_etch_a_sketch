const container = document.querySelector(".container")

for (let i = 0; i < 16; i++) {
  const columnGrid = document.createElement("div")

  for (let j = 0; j < 16; j++) {
    const grid = document.createElement("div")
    grid.classList.add("grid")
    grid.textContent = j
    columnGrid.appendChild(grid)
  }

  container.appendChild(columnGrid)
}
