import Game from "./Game.js";
window.addEventListener("load", () => {
    const game = new Game();
    initPlaceSection(game);
    initMovementSection(game);
    initReport(game);
});
function initReport(game) {
    game.addStateListener(({ position: { x, y }, direction }) => {
        const elemReport = document.getElementById("report");
        if (elemReport)
            elemReport.innerHTML = `X:${x}, Y:${y}, Direction:${directionToString(direction)}`;
    });
}
function directionToString(direction) {
    switch (direction) {
        case 0: return "North";
        case 90: return "East";
        case 180: return "South";
        case 270: return "West";
        default:
            "North";
    }
}
function initMovementSection(game) {
    const btnRotateLeft = document.getElementById("rotate-left"), btnRotateRight = document.getElementById("rotate-right"), btnMove = document.getElementById("move"), btnAttack = document.getElementById("attack");
    btnRotateLeft.addEventListener("click", () => {
        game.rotate(270);
    });
    btnRotateRight.addEventListener("click", () => {
        game.rotate(90);
    });
    btnMove.addEventListener("click", () => {
        game.move();
    });
    btnAttack.addEventListener("click", () => {
        game.attack();
    });
    game.addStateListener((state) => {
        const elemSectionMovement = document.getElementById("section-movement");
        if (elemSectionMovement)
            elemSectionMovement.style.pointerEvents = "all";
    });
}
function initPlaceSection(game) {
    const inpX = document.getElementById("input-place-x"), inpY = document.getElementById("input-place-y"), inpDirection = document.getElementById("input-place-direction"), btnSetPlace = document.getElementById("btn-set-place");
    btnSetPlace === null || btnSetPlace === void 0 ? void 0 : btnSetPlace.addEventListener("click", () => {
        const x = parseInt(inpX === null || inpX === void 0 ? void 0 : inpX.value);
        const y = parseInt(inpY === null || inpY === void 0 ? void 0 : inpY.value);
        const direction = parseInt(inpDirection.value);
        game.setPlace(x, y, direction);
    });
}
