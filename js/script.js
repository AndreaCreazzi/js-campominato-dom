// Controllo js
console.log(`JS OK`)

// elementi dal DOM
const buttonElement = document.querySelector(`button`);

const containerElement = document.getElementById(`container`);

const mode = document.getElementById(`mode`)

const scoreElement = document.getElementById(`score`);

// funzione celle
const addCells = (numberCells) =>{
    let cellsElement = document.createElement(`div`);
    cellsElement.classList.add(`cells` , `cells-${numberCells}`);
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
    console.log(bombs)
    return bombs
}

// funzione del gioco
const mineField = () =>{

    // elemento preso dal DOM
    const modeElement = document.getElementById(`mode`)

    // svuoto il container
    containerElement.innerHTML = ``

    // preparazione elementi dento le celle
    const cellsNumber =  parseInt(modeElement.value)
    const cells1 = cellsNumber
    const cells2 = cellsNumber
    const cellsTotal = cells1 * cells2
    let score = 0
    let totalBombs = 16
    const totalScore = cellsTotal - totalBombs
    const bombs = randomBombs(totalBombs , cellsTotal)

    // ciclo di celle
    for(let i = 1; i<=cellsTotal; i++){
    const cellsElement = addCells(cellsNumber)
    cellsElement.innerText = i

    // classe flex aggiunta
    cellsElement.classList.add(`flex`)

    // celle in ascolto
    cellsElement.addEventListener(`click` , function(){
        if(!cellsElement.classList.contains(`safe`) && !bombs.includes(i)){
            scoreElement.innerHTML = score++
            cellsElement.classList.add(`safe`)
            console.log(cellsElement.innerText)
        }
        const hashitBomb = bombs.includes(i)

        if(hashitBomb){
            cellsElement.classList.add(`bombs`)
            alert(`HAI PERSO, hai raggiunto : ${score} punti`)
            window.location.reload()
        }else if(score === totalScore){
            alert(`HAI VINTO, ha raggiunto il punteggio massimo ${totalScore}`)
        }
    })
    // 
    containerElement.appendChild(cellsElement);
}
}
// bottone in ascolto
buttonElement.addEventListener(`click` , mineField)