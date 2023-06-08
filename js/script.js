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

const scoreElemento = document.getElementById(`score`);

// preparazione html
const cells1 = 10
const cells2 = 10
const cellsTotal = cells1 * cells2
let score = 0

// ciclo di celle
for(let i = 1; i<=cellsTotal; i++){
    const cellsElement = addCells()
    cellsElement.innerText = i
    // bottone in ascolto
    buttonElement.addEventListener(`click` , function(){
    cellsElement.classList.add(`flex`)
    // celle in ascolto
    cellsElement.addEventListener(`click` , function(){
        cellsElement.classList.add(`bg-yellow`)
        score++
        scoreElemento.innerHTML = score
    })
    })
    containerElement.appendChild(cellsElement);
}
