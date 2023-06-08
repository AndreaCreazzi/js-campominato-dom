// Controllo js
console.log(`JS OK`)

// funzione celle
const addCells = () =>{
    let cellsElement = document.createElement(`div`);
    cellsElement.classList.add(`cells`);
    return cellsElement
}

// elementi dal DOM
const buttonElement = document.querySelector(`button`);
console.log(`button`);

const containerElement = document.getElementById(`container`);
console.log(`container`);

const mode = document.getElementById(`mode`)

// preparazione html
const cells1 = 10
const cells2 = 10
const cellsTotal = cells1 * cells2

// ciclo di celle
for(let i = 1; i<=cellsTotal; i++){
    const cellsElement = addCells()
    cellsElement.innerText = i
    // bottone in ascolto
    buttonElement.addEventListener(`click` , function(){
    cellsElement.classList.add(`flex`)
    // celle in ascolto
    cellsElement.addEventListener(`click` , function(){
        cellsElement.classList.toggle(`bg-yellow`)
    })
    })
    containerElement.appendChild(cellsElement);
}
