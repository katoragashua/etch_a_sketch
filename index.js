const sketchpad = document.querySelector("#sketchpad");                 //Grabbing the sketchpad divs
const clearBtn = document.querySelector("#clearGrid");                 //Grabbing the clear grid button
const populateBtn = document.querySelector("#populateGrid");          //Grabbing the populate grid button
let cellsArray = [];                                                 //Creating an array so we can push the cells into and loop 

populateGrid.addEventListener("click", createGrids);

//Function to create grid
function createGrids() {
    sketchpad.innerHTML = " ";                                                    //Making sure the sketchpad is alway empty on initialisation
    let number = parseInt(prompt("Number: "));                                   //Number of grid cells per side
    for(let i = 0; i < number**2; i++) {
        const cells = document.createElement("div");
        sketchpad.appendChild(cells);
        console.log(cells);
        cellsArray.push(cells);
        sketchpad.style.gridTemplateColumns = `repeat(${number}, 1fr)`;       //Setting the grid template columns
        sketchpad.style.gridTemplateRows = `repeat(${number}, 1fr)`;         //Setting the grid template rows
       
        clearBtn.addEventListener("click", () => {                         //Enanling the clear button
            sketchpad.innerHTML = " ";
    })
    }

    cellsArray.forEach(cell => {                                      //Looping through the cells to add a random color on mouseover
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = randomColor();
        })
    })
}

//Generating random colors
function random() {
    let randomNumber = Math.floor(Math.random() *256);
    return randomNumber;
};

function randomColor() {
    let color = `rgba(${random()}, ${random()}, ${random()})`;
    return color;  
};