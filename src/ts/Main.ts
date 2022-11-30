import Game from "./Game.js"

 
window.addEventListener("load", () => {
    const game: Game = new Game();
    initPlaceSection(game);

    initMovementSection(game);
})

function initMovementSection(game: Game){
    const btnRotateLeft = document.getElementById("rotate-left") as HTMLButtonElement,
    btnRotateRight = document.getElementById("rotate-right") as HTMLButtonElement,
    btnMove = document.getElementById("move") as HTMLButtonElement;

    btnRotateLeft.addEventListener("click", () => {
        game.rotate(-90);
    });

    btnRotateRight.addEventListener("click", () => {
        game.rotate(90);
    });


}

function initPlaceSection(game: Game){
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



