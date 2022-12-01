const gameBoard = (() =>[{

}])();

const players = (name) => {

};

const displayController = (() => {

})();

const createGrid = (() => {
    const boxCreate = () => {
        let boxParent = document.querySelector(".platform");
        let box = document.createElement("button");
        box.classList.add("box");
        boxParent.appendChild(box);
    }
    return {
        publicCount: function() {
            let boxCount = 9;
            for (let i = 0; i < boxCount; i++) {
                boxCreate();
            }
        }
    }
})();

createGrid.publicCount();