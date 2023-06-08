// Controllo js
console.log(`JS OK`)

// funzione celle
const addCells = () =>{
    let cellsElement = document.createElement(`div`);
    cellsElement.classList.add(`cells`);
    return cellsElement
}

// funzione bombe(random)
const randomBombs = (totalBombs , cellsTotal) =>{
    let bombs = []
    while(bombs.length < totalBombs){
        let randomNumbers;
        do{
        randomNumbers = Math.floor(Math.random() * cellsTotal) + 1       
        }while(bombs.includes(randomNumbers))
        bombs.push(randomNumbers)
    }
    return bombs
}


// elementi dal DOM
const buttonElement = document.querySelector(`button`);
console.log(`button`);

const containerElement = document.getElementById(`container`);
console.log(`container`);

const mode = document.getElementById(`mode`)

const scoreElement = document.getElementById(`score`);

// preparazione html
const cells1 = 10
const cells2 = 10
const cellsTotal = cells1 * cells2
let score = 0
let totalBombs = 16
const totalScore = cellsTotal - totalBombs
const bombs = randomBombs(totalBombs , cellsTotal)

// ciclo di celle
for(let i = 1; i<=cellsTotal; i++){
    const cellsElement = addCells()
    cellsElement.innerText = i
    // bottone in ascolto
    buttonElement.addEventListener(`click` , function(){
    cellsElement.classList.add(`flex`)
    // celle in ascolto
    cellsElement.addEventListener(`click` , function(){
        if(!cellsElement.classList.contains(`safe`)){
            scoreElement.innerHTML = ++score
            cellsElement.classList.add(`safe`)
            console.log(cellsElement.innerText)
        }
    })
    })
    containerElement.appendChild(cellsElement);
}
