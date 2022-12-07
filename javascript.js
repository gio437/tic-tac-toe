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

function markXSpot(e) {
    let boxCount = ["X", "X"];
    let num;
    let dataVal;
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
                if (num == boxCount[dataVal]) {
                    console.log(boxCount);
                    return;
                }
                else {
                    console.log("inputted");
                    boxCount.push("X");
                    boxEl[dataVal].id = "X";
                    console.log(boxCount);
                    markOSpot();
                }
        //}
                    //return {boxCount}

function markOSpot() {
    console.log('Hello');
}
}

const players = (name) => {
    
};

const getPlayer = players();

//getPlayer();

const displayController = (() => {

})();