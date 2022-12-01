const gameBoard = (() =>[{

}])();

const players = (name) => {

};

const displayController = (() => {

})();

const createGrid = (() => {
    const boxCreate = () => {
        let boxParent = document.querySelector(".platform");
        let box = document.createElement("div");
        box.classList.add("box");
        boxParent.appendChild(box);
    }
    return () => {
        let boxCount = 10;
        for (let i = 0; i < boxCount; i++) {
            boxCreate[i];
        }
    }
})();

const create = createGrid();

create();