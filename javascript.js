const gameBoard = (() => {
    let boxCount = ["X", "O"];

    const boxCreate = () => {
        boxCount.map((boxCount) => {
            let boxParent = document.querySelector(".platform");
            let box = document.createElement("button");
            box.classList.add("box");
            box.textContent = boxCount;
            boxParent.appendChild(box);
        })
    }
    return {
        publicCount: function() {
            boxCreate();
        }
    }
})();

gameBoard.publicCount();

const players = (name) => {
    
};

const displayController = (() => {

})();