import DroneState from "./DroneState";
import Vector from "./Vector";

export type Direction  = "North" | "East" | "South" | "West";

const directionVectors: Record<Direction, Vector> = 
{
    "North": { x: 0, y: 1},
    "East": { x: 1, y: 0},
    "South": { x: 0, y: 1},
    "West": { x: -1, y: 1}
}

export default
class Game {
    private droneState: DroneState| null;

    constructor(){
        this.droneState = null;
    }

    setPlace(_x: number, _y: number, direction: Direction){
        const directionVector: Vector = directionVectors[direction];
        const x = limitNumber(_x, 0, 10),
        y = limitNumber(_y, 0, 10);

        const droneState: DroneState = {
            position: { x, y },
            direction: directionVector
        }

        this.droneState = droneState;
        this.updateUI();
    }

    private updateUI(){
        if(this.droneState){
            let imgDrone: HTMLImageElement | null = document.getElementById("drone") as HTMLImageElement;
            if(!imgDrone){
                imgDrone = new Image();
                imgDrone.id = "drone";
                imgDrone.src = "../assets/img/drone.svg";
                (document.getElementById("container-world") as HTMLDivElement).appendChild(imgDrone);
            }

            const { position, direction } = this.droneState;
            const x = position.x,
            invertedY = 11 - position.y;

            imgDrone.style.gridRowStart = `${invertedY}`;
            imgDrone.style.gridColumnStart = `${x}`;
        }
    }
}

function limitNumber(num: number, min: number = 0, max: number = 0){
    return Math.max(min, Math.min(num, max));
}

