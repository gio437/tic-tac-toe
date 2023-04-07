const gameBoard = (() => {
    return {
            publicCount: function() {
                let gridCount = 9;
                let boxTag = 0;

                const boxCreate = () => {
                    let boxParent = document.querySelector(".platform");
                    let box = document.createElement("button");
                    box.classList.add("box");
                    box.setAttribute("data-set", boxTag);
                    boxTag++;
                    boxParent.appendChild(box);
                }
                for (let i = 0; i < gridCount; i++) {
                    boxCreate();
                }

            }
        }
})();

gameBoard.publicCount();

const startGame = () => {
    if (playerList[0] !== undefined && playerList[1] !== undefined) {
        let createMark = document.querySelector(".platform");
        createMark.addEventListener("click", markXSpot);
    }
    else {
        createMark.removeEventListener("click", markXSpot);
    }
}

let boxCount = [];
let xVal = 0;
let moveCount = 0;

function markXSpot(e) {
    let num;
    let dataVal;

      if (e.target.classList.contains("box")) {
          num = (e.target.id);
          dataVal = parseInt(e.target.getAttribute("data-set"));
      }

      let boxEl = document.querySelectorAll(".box");
      let eraseBox = document.querySelector(`.box[data-set="${dataVal}"]`);
      console.log(eraseBox);
            if (boxCount[dataVal] == "X" || boxCount[dataVal] == "O" || xVal == 1) {
                console.log(boxCount);
                markOSpot();
                return;
            }
            else {
                console.log("inputted X");
                boxCount[dataVal] = "X";
                boxEl[dataVal].id = "X";
                xVal = 1;
                moveCount++;
                markOSpot();

                eraseBox.remove();
                let grid = document.querySelector(".platform");
                let newBox = document.createElement("button");
                newBox.classList.add("box");
                newBox.textContent = "X";
                newBox.id = "X";
                newBox.setAttribute("data-set", dataVal);
                grid.insertBefore(newBox, grid.children[dataVal]);

                decideWinner();
            }

        function markOSpot() {
            if (boxCount[dataVal] == "X" || boxCount[dataVal] == "O" || xVal == 0) {
                console.log(boxCount);
                return;
            }
            else {
                console.log("inputted O");
                boxCount[dataVal] = "O";
                boxEl[dataVal].id = "O";
                xVal = 0;
                moveCount++;
                console.log(boxCount);

                eraseBox.remove();
                let grid = document.querySelector(".platform");
                let newBox = document.createElement("button");
                newBox.classList.add("box");
                newBox.textContent = "O";
                newBox.id = "O";
                newBox.setAttribute("data-set", dataVal);
                grid.insertBefore(newBox, grid.children[dataVal]);

                decideWinner();
            }
        }
}

function decideWinner(player1, player2) {
    console.log(moveCount);

    if (boxCount[0] == "X" && boxCount[1] == "X" && boxCount[2] == "X") {
        restartGame();
        players(player1);
        xVal = 0;
        endGame = 1;
    }
    else if (boxCount[0] == "X" && boxCount[3] == "X" && boxCount[6] == "X") {
        restartGame();
        players(player1);
        xVal = 0;
        endGame = 1;
    }
    else if (boxCount[2] == "X" && boxCount[4] == "X" && boxCount[6] == "X") {
        restartGame();
        players(player1);
        xVal = 0;
        endGame = 1;
    }
    else if (boxCount[3] == "X" && boxCount[4] == "X" && boxCount[5] == "X") {
        restartGame();
        players(player1);
        xVal = 0;
        endGame = 1;
    }
    else if (boxCount[6] == "X" && boxCount[7] == "X" && boxCount[8] == "X") {
        restartGame();
        players(player1);
        xVal = 0;
        endGame = 1;
    }
    else if (boxCount[1] == "X" && boxCount[4] == "X" && boxCount[7] == "X") {
        restartGame();
        players(player1);
        xVal = 0;
        endGame = 1;
    }
    else if (boxCount[2] == "X" && boxCount[5] == "X" && boxCount[8] == "X") {
        restartGame();
        players(player1);
        xVal = 0;
        endGame = 1;
    }
    else if (boxCount[0] == "X" && boxCount[4] == "X" && boxCount[8] == "X") {
        restartGame();
        players(player1);
        xVal = 0;
        endGame = 1;
    }
    else if (boxCount[0] == "O" &&  boxCount[1] == "O" && boxCount[2] == "O") {
        restartGame();
        showSecondWinner(player2);
        xVal = 0;
        endGame = 2;
    }
    else if (boxCount[0] == "O" && boxCount[3] == "O" && boxCount[6] == "O") {
        restartGame();
        showSecondWinner(player2);
        xVal = 0;
        endGame = 2;
    }
    else if (boxCount[2] == "O" && boxCount[4] == "O" && boxCount[6] == "O") {
        restartGame();
        showSecondWinner(player2);
        xVal = 0;
        endGame = 2;
    }
    else if (boxCount[3]  == "O" && boxCount[4] == "O" && boxCount[5] == "O") {
        restartGame();
        showSecondWinner(player2);
        xVal = 0;
        endGame = 2;
    }
    else if (boxCount[6]  == "O" && boxCount[7] == "O" && boxCount[8] == "O") {
        restartGame();
        showSecondWinner(player2);
        xVal = 0;
        endGame = 2;
    }
    else if (boxCount[1] == "O" && boxCount[4] == "O" && boxCount[7] == "O") {
        restartGame();
        showSecondWinner(player2);
        boxCount = [];
        xVal = 0;
        endGame = 2;
    }
    else if (boxCount[2] == "O" && boxCount[5] == "O" && boxCount[8] == "O") {
        restartGame();
        showSecondWinner(player2);
        xVal = 0;
        endGame = 2;
    }
    else if (boxCount[0] == "O" && boxCount[4] == "O" && boxCount[8] == "O") {
        restartGame();
        showSecondWinner(player2);
        xVal = 0;
        endGame = 2;
    }
    else if (moveCount == 9 && endGame == 0) {
                restartGame();
    }
}

let endGame = 0;
let playerList = [];

function players() {
    let winnerLine = document.querySelector(".result");
    let winHeader1 = document.createElement("h2");
    winHeader1.textContent = playerList[0] + " wins!";
    winnerLine.appendChild(winHeader1);
    playerList = [];

    if (moveCount == 9) {
        let result = document.querySelector(".tie");
        result.remove();
    }
};

function showSecondWinner() {
    let winnerLine = document.querySelector(".result");
    let winHeader1 = document.createElement("h2");
    winHeader1.textContent = playerList[1] + " wins!";
    winnerLine.appendChild(winHeader1);
    playerList = [];

    if (moveCount == 9) {
        let result = document.querySelector(".tie");
        result.remove();
    }
}

const displayController = () => {
    let getPlayer1 = document.querySelector(".btn1");
    getPlayer1.addEventListener("click", handler1 = () => {
        let player1 = window.prompt("enter player 1");
        playerList[0] = player1;
        while (endGame == 1) {
            players();
            endGame = 0;
        }
        startGame();
    })
    let getPlayer2 = document.querySelector(".btn2");
    getPlayer2.addEventListener("click", handler2 = () => {
        let player2 = window.prompt("enter player 2");
        playerList[1] = player2;
        while (endGame == 2) {
            showSecondWinner();
            endGame = 0;
        }
        startGame();
    })
}

displayController();

function restartGame() {
    let box = document.querySelector(".platform");
    box.removeEventListener("click", markXSpot);

    if (moveCount == 9) {
        let result = document.querySelector(".result");
        let tie = document.createElement("h2");
        tie.textContent = "Tie!";
        tie.classList.add("tie");
        result.appendChild(tie);
    }

    let restart = document.querySelector(".restart");
    let restartBtn = document.createElement("button");
    restartBtn.classList.add("restartBtn");
    restartBtn.textContent = "Restart";
    restart.appendChild(restartBtn);
    let getPlayer1 = document.querySelector(".btn1");
    getPlayer1.removeEventListener("click", handler1);
    let getPlayer2 = document.querySelector(".btn2");
    getPlayer2.removeEventListener("click", handler2);

     restartBtn.addEventListener("click", () => {
         boxCount = [];
         playerList = [];
         endGame = 0;
         moveCount = 0;
         xVal = 0;
         let removeResult = document.querySelector("h2");
         console.log(removeResult);

         restartBtn.remove();
         if (removeResult != null) {
                removeResult.remove();
         }
         // restartBtn.removeEventListener("click");

         const grid = document.querySelectorAll(".box");
         for (let i = 0; i < grid.length; i++) {
            grid[i].remove();
        }
        gameBoard.publicCount();
        displayController();
     })
}