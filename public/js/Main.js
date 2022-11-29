import Game from "./Game.js";
window.addEventListener("load", () => {
    const game = new Game();
    initPlaceSection(game);
});
function initPlaceSection(game) {
    console.log("initing...");
    const inpX = document.getElementById("input-place-x"), inpY = document.getElementById("input-place-y"), inpDirection = document.getElementById("input-place-direction"), btnSetPlace = document.getElementById("btn-set-place");
    btnSetPlace === null || btnSetPlace === void 0 ? void 0 : btnSetPlace.addEventListener("click", () => {
        const x = parseInt(inpX === null || inpX === void 0 ? void 0 : inpX.value);
        const y = parseInt(inpY === null || inpY === void 0 ? void 0 : inpY.value);
        const direction = inpDirection.value;
        game.setPlace(x, y, direction);
    });
}
