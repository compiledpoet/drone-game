import DroneState from "./DroneState";
import Vector from "./Vector";

 


export default
class Game {
    private droneState: DroneState| null;

    constructor(){
        this.droneState = null;
    }

    rotate(deg: number){
        if(this.droneState){
            this.droneState.direction += deg;
            this.droneState.direction %= 360;
        }

        this.updateUI();
    }

    setPlace(_x: number, _y: number, direction: number){
        const x = limitNumber(_x, 0, 10),
        y = limitNumber(_y, 0, 10);

        const droneState: DroneState = {
            position: { x, y },
            direction
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

            console.log(position, direction);
            imgDrone.style.gridRowStart = `${invertedY}`;
            imgDrone.style.gridColumnStart = `${x}`;
            imgDrone.style.rotate = `${ direction }deg`
            console.log(imgDrone.style.rotate);
        }
    }
}

function limitNumber(num: number, min: number = 0, max: number = 0){
    return Math.max(min, Math.min(num, max));
}

