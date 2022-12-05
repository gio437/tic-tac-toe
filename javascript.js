const gameBoard = (() => {
    let gridCount = 9;
    let boxTag = 0;

    const boxCreate = () => {
        //boxCount.map((boxCount) => {
                let boxParent = document.querySelector(".platform");
                let box = document.createElement("button");
                box.classList.add("box");
                box.id = boxTag;
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
                createMark.addEventListener("click", () => {
                    markSpot();
                })
            }
        }
})();

gameBoard.publicCount();

const markSpot = (e) => {
    let boxCount = ["X", "O","X", "O","X", "O","X", "O"];

    const markX = () => {

      if (e.target.classList.contains("box")) {
          num = parseInt(e.target.parentElement.id);
          console.log(num);
      }

      for (let j = 0; j < boxCount.length; j++) {
            if (boxCount == num) {
                    return;
            }
            else {
                boxCount[num] = "X";
            }
        }
    }
        return {markX}
};

const players = (name) => {
    
};

const getPlayer = players();

//getPlayer();

const displayController = (() => {

})();