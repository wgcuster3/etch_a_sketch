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

function createNewGrid () {
    let gridSize = prompt("Enter a grid size between 1 - 100");

    if (gridSize === ""){
        alert("Please Enter a value");
        return;
    }

    if (parseInt(gridSize) < 1){
        alert("Too small");
        return;
    }

    if (parseInt(gridSize) > 100){
        alert("Too large");
        return;
    }

    container.textContent = '';

    createRow(parseInt(gridSize));
}

const container = document.querySelector("#container"); 
const newGridBtn = document.querySelector("#newGridBtn");

newGridBtn.addEventListener('click', createNewGrid);
createRow(16);
