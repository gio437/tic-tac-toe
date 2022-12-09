const gameBoard = (() => {
    let gridCount = 9;
    let boxTag = 0;

    const boxCreate = () => {
        //boxCount.map((boxCount) => {
                let boxParent = document.querySelector(".platform");
                let box = document.createElement("button");
                box.classList.add("box");
                box.setAttribute("data-set", boxTag);
                boxTag++;
                //box.textContent = boxCount;
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

    deleteResult();

    function deleteResult() {
        if (resultVal == 1) {
            let removeButton1 = document.querySelector("h2");
            removeButton1.remove();
            resultVal = 0;
        }
    }

      if (e.target.classList.contains("box")) {
          num = (e.target.id);
          dataVal = parseInt(e.target.getAttribute("data-set"));
      }

      let boxEl = document.querySelectorAll(".box");
        //for (let j = 0; j < boxEl.length; j++) {
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

                let removeBox = document.querySelectorAll(".box");
                for (let i = 0; i < removeBox.length; i++) {
                    //removeBox[dataVal].remove();
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
        players(player1);
        boxCount = [];
        xVal = 0;
    }
    else if (boxCount[0] && boxCount[3] && boxCount[6] == "X") {
        players(player1);
        boxCount = [];
        xVal = 0;
    }
    else if (boxCount[2] && boxCount[4] && boxCount[6] == "X") {
        players(player1);
        boxCount = [];
        xVal = 0;
    }
    else if (boxCount[3] && boxCount[4] && boxCount[5] == "X") {
        players(player1);
        boxCount = [];
        xVal = 0;
    }
    else if (boxCount[6] && boxCount[7] && boxCount[8] == "X") {
        players(player1);
        boxCount = [];
        xVal = 0;
    }
    else if (boxCount[1] && boxCount[4] && boxCount[7] == "X") {
        players(player1);
        boxCount = [];
        xVal = 0;
    }
    else if (boxCount[2] && boxCount[5] && boxCount[8] == "X") {
        players(player1);
        boxCount = [];
        xVal = 0;
    }
    else if (boxCount[0] && boxCount[4] && boxCount[8] == "X") {
        players(player1);
        boxCount = [];
        xVal = 0;
    }
    else if (boxCount[0] && boxCount[1] && boxCount[2] == "O") {
        players(player2);
        boxCount = [];
        xVal = 0;
    }
    else if (boxCount[0] && boxCount[3] && boxCount[6] == "O") {
        players(player2);
        boxCount = [];
        xVal = 0;
    }
    else if (boxCount[2] && boxCount[4] && boxCount[6] == "O") {
        players(player2);
        boxCount = [];
        xVal = 0;
    }
    else if (boxCount[3] && boxCount[4] && boxCount[5] == "O") {
        players(player2);
        boxCount = [];
        xVal = 0;
    }
    else if (boxCount[6] && boxCount[7] && boxCount[8] == "O") {
        players(player2);
        boxCount = [];
        xVal = 0;
    }
    else if (boxCount[1] && boxCount[4] && boxCount[7] == "O") {
        players(player2);
        boxCount = [];
        xVal = 0;
    }
    else if (boxCount[2] && boxCount[5] && boxCount[8] == "O") {
        players(player2);
        boxCount = [];
        xVal = 0;
    }
    else if (boxCount[0] && boxCount[4] && boxCount[8] == "O") {
        players(player2);
        boxCount = [];
        xVal = 0;
    }
}

let getPlayer1 = document.querySelector(".btn1");
getPlayer1.addEventListener("click", () => {
    let player1 = window.prompt("enter player 1");
    decideWinner(player1);
})

let getPlayer2 = document.querySelector(".btn2");
getPlayer2.addEventListener("click", () => {
    let player2 = window.prompt("enter player 2");
    decideWinner(player2);
})

let resultVal = 0;

const players = (player1, player2) => {
    let winnerLine = document.querySelector(".result");
    let winHeader = document.createElement("h2");
    winHeader.textContent = player1 + "wins!";
    winHeader.textContent = player2 + "wins!";
    winnerLine.appendChild(winHeader);
    resultVal++;
};

//players();

const displayController = (() => {

})();