// const player_x = 'x'
// const player_circle = 'circle'
// const winning = [
//     [1, 2, 3],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
// ]
let allCells = document.querySelectorAll('.cell');
let firstCell = document.querySelector(".cell")
// const boardElement = document.getElementById('board')
// const winningMassageElement = document.getElementById('winningMassage')
// const restartButton = document.getElementById('restartButton')
// const winningMessageTextElement = document.querySelector('#winningMessageText')

// let circle_Turn

//-------------------start game-------------------------
// startGame()

// restartButton.addEventListener('click', startGame)

// function startGame() {
//     circle_Turn = false
//     cellElements.forEach(cell => {
//         cell.classList.remove(player_x)
//         cell.classList.remove(player_circle)
//         cell.removeEventListener('click', handleClick)
//         cell.addEventListener('click', handleClick, {once: true})
//     })
//     setBoardHoverClass()
//     winningMassageElement.classList.remove('show')
// }

// function handleClick(e) {
//     const cell =e.target
//     const currentClass = circle_Turn ? player_circle : player_x
//     placeMark(cell, currentClass)
//     if(checkWin(currentClass)) {
//         endGame(false)
//     }else if (isDraw()) {
//         endGame(true)
//     }else {
//         swapTurns()
//         setBoardHoverClass()
//     }
// }

// function endGame(draw) {
//     if (draw) {
//         winningMessageTextElement.innerText = 'draw!'
//     }else {
//         winningMessageTextElement.innerText = `player with ${circle_Turn  ? "O" : "X"} wins!`
//     }
//     winningMassageElement.classList.add('show')
// }


// function isDraw () {
//     return[...cellElements].every(cell => {
//         return cell.classList.contains(player_x) || cell.classList.contains(player_circle)
//     })
// }

// function placeMark (cell, currentClass) {
//     cell.classList.add(currentClass)
// }

// function swapTurns () {
//     circle_Turn = !circle_Turn
    
// }

// function setBoardHoverClass() {
//     board.classList.remove(player_x)
//     board.classList.remove(player_circle)
//     circle_Turn ? boardElement.classList.add(player_circle) :  boardElement.classList.add(player_x) 
// }


// function checkWin (currentClass) {
//     return winning.some(combination => {
//         return combination.every(index => {
//             return cellElements[index].classList.contains(currentClass)
//         })
//     })
// }