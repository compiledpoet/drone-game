import DroneState from "./DroneState.js";
import Game from "./Game.js"

 
window.addEventListener("load", () => {
    const game: Game = new Game();
    initPlaceSection(game);

    initMovementSection(game);

    initReport(game)
})


function initReport(game: Game){
    game.addStateListener(({ position: { x, y }, direction }: DroneState) => {
        const elemReport= document.getElementById("report");
        if(elemReport)
        elemReport.innerHTML = `X:${ x}, Y:${ y }, Direction:${ directionToString(direction)}`
    })

}

function directionToString(direction: number){
    switch(direction){
        case 0: return "North";
        case 90: return "East";
        case 180: return "South";
        case 270: return "West"
        default:
            "North"
    }
}

function initMovementSection(game: Game){
    const btnRotateLeft = document.getElementById("rotate-left") as HTMLButtonElement,
    btnRotateRight = document.getElementById("rotate-right") as HTMLButtonElement,
    btnMove = document.getElementById("move") as HTMLButtonElement,
    btnAttack = document.getElementById("attack") as HTMLButtonElement;


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
        if(elemSectionMovement)
            elemSectionMovement.style.pointerEvents = "all";
    })




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



