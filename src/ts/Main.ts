import Game from "./Game.js"

 
window.addEventListener("load", () => {
    const game: Game = new Game();
    initPlaceSection(game);
})

function initPlaceSection(game: Game){
    console.log("initing...");
    const inpX = document.getElementById("input-place-x") as HTMLInputElement,
    inpY = document.getElementById("input-place-y") as HTMLInputElement,
    inpDirection = document.getElementById("input-place-direction") as HTMLSelectElement,
    btnSetPlace = document.getElementById("btn-set-place") as HTMLButtonElement;

 
    btnSetPlace?.addEventListener("click", () => {
        const x = parseInt(inpX?.value);
        const y = parseInt(inpY?.value);
        const direction = parseInt(inpDirection.value);

        game.setPlace(x, y, direction);
    })
    
}



