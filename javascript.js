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

function markXSpot(e) {
    let num;
    let dataVal;
    let xVal = 0;
    console.log(e);

      if (e.target.classList.contains("box")) {
          num = (e.target.id);
          dataVal = parseInt(e.target.getAttribute("data-set"));
          console.log(num);
          console.log(dataVal);
      }

      console.log(boxCount[dataVal]);

      let boxEl = document.querySelectorAll(".box");
        //for (let j = 0; j < boxEl.length; j++) {
                if (boxCount[dataVal] == "X" && xVal == 0 || boxCount[dataVal] == "O" && xVal == 0) {
                    console.log(boxCount);
                    return;
                }
                else { 
                    console.log("inputted X");
                    boxCount[dataVal] = "X";
                    boxEl[dataVal].id = "X";
                    xVal = 1;
                    markOSpot();
                }

                console.log(boxCount);

            function markOSpot() {
                if (boxCount[dataVal] == "X" && xVal == 1|| boxCount[dataVal] == "O" && xVal == 1) {
                    console.log(boxCount);
                    return;
                }
                else {
                    console.log("inputted O");
                    boxCount[dataVal] = "O";
                    boxEl[dataVal].id = "O";
                    xVal = 0;
                }
            }
}

const players = (name) => {
    
};

const getPlayer = players();

//getPlayer();

const displayController = (() => {

})();