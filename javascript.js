function fillRow(row, gridSize){
    for (let i = 0; i < gridSize; i++){
        //console.log(`Create item ${i}`);
        let gridItem = document.createElement("div")
        gridItem.textContent = i;
        //gridItem.style.margin = "2px";
        //gridItem.style.border = "thin solid #000";
        gridItem.style.flexGrow = "1";
        row.appendChild(gridItem);
    }
}

function createRow (gridSize) {
    for (let i = 0; i < gridSize; i++){
        //console.log(`Create row ${i}`);
        let row = document.createElement("div");
        //row.style.border = "thin solid #d1065e";
        //row.style.margin = "10px";
        row.style.display = "flex";
        row.style.justifyContent = "space-between";

        fillRow(row, gridSize);
        container.appendChild(row);
    }
}
const container = document.querySelector("#container");

createRow(16);
