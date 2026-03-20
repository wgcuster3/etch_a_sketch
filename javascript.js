function fillRow(row, gridSize){
    for (let i = 0; i < gridSize; i++){
        let gridItem = document.createElement("div")
        gridItem.style.border = "thin solid #a6a2a3";
        gridItem.style.flexGrow = "1";
        gridItem.style.height = ((container.clientHeight / gridSize) - 2) + "px";
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = "#d1065e";
        });
        row.appendChild(gridItem);
    }
}

function createRow (gridSize) {
    for (let i = 0; i < gridSize; i++){
        let row = document.createElement("div");
        row.style.display = "flex";
        row.style.justifyContent = "space-between";

        fillRow(row, gridSize);
        container.appendChild(row);
    }
}
const container = document.querySelector("#container"); 
console.log(container.clientHeight);
createRow(16);
