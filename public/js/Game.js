export default class Game {
    constructor() {
        this.droneState = null;
    }
    setPlace(_x, _y, direction) {
        const x = limitNumber(_x, 0, 10), y = limitNumber(_y, 0, 10);
        const droneState = {
            position: { x, y },
            direction
        };
        this.droneState = droneState;
        this.updateUI();
    }
    updateUI() {
        if (this.droneState) {
            let imgDrone = document.getElementById("drone");
            if (!imgDrone) {
                imgDrone = new Image();
                imgDrone.id = "drone";
                imgDrone.src = "../assets/img/drone.svg";
                document.getElementById("container-world").appendChild(imgDrone);
            }
            const { position, direction } = this.droneState;
            const x = position.x, invertedY = 11 - position.y;
            console.log(position, direction);
            imgDrone.style.gridRowStart = `${invertedY}`;
            imgDrone.style.gridColumnStart = `${x}`;
            imgDrone.style.rotate = `${direction}deg`;
            console.log(imgDrone.style.rotate);
        }
    }
}
function limitNumber(num, min = 0, max = 0) {
    return Math.max(min, Math.min(num, max));
}
