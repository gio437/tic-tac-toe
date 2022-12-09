const gameBoard = (() => {
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
    return {
        publicCount: function() {
            for (let i = 0; i < gridCount; i++) {
                boxCreate();
            }
                let createMark = document.querySelector(".platform");
                createMark.addEventListener("click", markXSpot); 
            }
        }
})();

gameBoard.publicCount();

let boxCount = [];
let xVal = 0;

function markXSpot(e) {
    let num;
    let dataVal;

      if (e.target.classList.contains("box")) {
          num = (e.target.id);
          dataVal = parseInt(e.target.getAttribute("data-set"));
      }

      let boxEl = document.querySelectorAll(".box"); //don't change
      let eraseBox = document.querySelectorAll(`.box[data-id="${dataVal}"]`);
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
                markOSpot();

                for (let i = 0; i < eraseBox.length; i++) {
                    eraseBox[dataVal].remove();
                }

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
                console.log(boxCount);

                let removeBox = document.querySelectorAll(".box");
                for (let i = 0; i < removeBox.length; i++) {
                    //removeBox[dataVal].remove();
                }

                decideWinner();
            }
        }
}

function decideWinner(player1, player2) {
    if (boxCount[0] && boxCount[1] && boxCount[2] == "X") {
        console.log("player1 wins!");
        players(firstPlayer);
        restartGame();
        xVal = 0;
        endGame = 1;
    }
    else if (boxCount[0] == "X" && boxCount[3] == "X" && boxCount[6] == "X") {
        players(player1);
        boxCount = [];
        xVal = 0;
        endGame = 1;
    }
    else if (boxCount[2] == "X" && boxCount[4] == "X" && boxCount[6] == "X") {
        players(player1);
        restartGame();
        xVal = 0;
        endGame = 1;
    }
    else if (boxCount[3] == "X" && boxCount[4] == "X" && boxCount[5] == "X") {
        players(player1);
        restartGame();
        xVal = 0;
        endGame = 1;
    }
    else if (boxCount[6] == "X" && boxCount[7] == "X" && boxCount[8] == "X") {
        players(player1);
        restartGame();
        xVal = 0;
        endGame = 1;
    }
    else if (boxCount[1] == "X" && boxCount[4] == "X" && boxCount[7] == "X") {
        players(player1);
        restartGame();
        xVal = 0;
        endGame = 1;
    }
    else if (boxCount[2] == "X" && boxCount[5] == "X" && boxCount[8] == "X") {
        players(player1);
        restartGame();
        xVal = 0;
        endGame = 1;
    }
    else if (boxCount[0] == "X" && boxCount[4] == "X" && boxCount[8] == "X") {
        players(player1);
        restartGame();
        xVal = 0;
        endGame = 1;
    }
    else if (boxCount[0] == "O" &&  boxCount[1] == "O" && boxCount[2] == "O") {
        showSecondWinner(player2);
        restartGame();
        xVal = 0;
        endGame = 2;
    }
    else if (boxCount[0] == "O" && boxCount[3] == "O" && boxCount[6] == "O") {
        showSecondWinner(player2);
        restartGame();
        xVal = 0;
        endGame = 2;
    }
    else if (boxCount[2] == "O" && boxCount[4] == "O" && boxCount[6] == "O") {
        showSecondWinner(player2);
        restartGame();
        xVal = 0;
        endGame = 2;
    }
    else if (boxCount[3]  == "O" && boxCount[4] == "O" && boxCount[5] == "O") {
        showSecondWinner(player2);
        restartGame();
        xVal = 0;
        endGame = 2;
    }
    else if (boxCount[6]  == "O" && boxCount[7] == "O" && boxCount[8] == "O") {
        showSecondWinner(player2);
        restartGame();
        xVal = 0;
        endGame = 2;
    }
    else if (boxCount[1] == "O" && boxCount[4] == "O" && boxCount[7] == "O") {
        showSecondWinner(player2);
        boxCount = [];
        xVal = 0;
        endGame = 2;
    }
    else if (boxCount[2] == "O" && boxCount[5] == "O" && boxCount[8] == "O") {
        showSecondWinner(player2);
        restartGame();
        xVal = 0;
        endGame = 2;
    }
    else if (boxCount[0] == "O" && boxCount[4] == "O" && boxCount[8] == "O") {
        showSecondWinner(player2);
        restartGame();
        xVal = 0;
        endGame = 2;
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
};

function showSecondWinner() {
    let winnerLine = document.querySelector(".result");
    let winHeader1 = document.createElement("h2");
    winHeader1.textContent = playerList[1] + " wins!";
    winnerLine.appendChild(winHeader1);
    playerList = [];
}

const displayController = (() => {
    let getPlayer1 = document.querySelector(".btn1");
    getPlayer1.addEventListener("click", () => {
        let player1 = window.prompt("enter player 1");
        playerList.splice(0, 0, player1);
        while (endGame == 1) {
            players();
            endGame = 0;
        }
    })
    let getPlayer2 = document.querySelector(".btn2");
    getPlayer2.addEventListener("click", () => {
        let player2 = window.prompt("enter player 2");
        playerList.splice(1, 0, player2);
        while (endGame == 2) {
            showSecondWinner();
            endGame = 0;
        }
    })
})();

function restartGame() {
    let box = document.querySelector(".platform");
    box.removeEventListener("click", markXSpot);

    let restart = document.querySelector(".restart");
    let restartBtn = document.createElement("button");
    restartBtn.classList.add("restartBtn");
    restartBtn.textContent = "Restart";
    restart.appendChild(restartBtn);

     restartBtn.addEventListener("click", () => {
         boxCount = [];
         box.addEventListener("click", markXSpot);
         let removeResult = document.querySelector("h2");

         restartBtn.remove();
         removeResult.remove();
         //restartBtn.removeEventListener("click");
     })
}