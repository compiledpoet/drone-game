const directionVectors = {
    "North": { x: 0, y: 1 },
    "East": { x: 1, y: 0 },
    "South": { x: 0, y: 1 },
    "West": { x: -1, y: 1 }
};
export default class Game {
    constructor() {
        this.droneState = null;
    }
    setPlace(_x, _y, direction) {
        const directionVector = directionVectors[direction];
        const x = limitNumber(_x, 0, 10), y = limitNumber(_y, 0, 10);
        const droneState = {
            position: { x, y },
            direction: directionVector
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
                document.getElementById("container-world").appendChild(imgDrone);
            }
            const { position, direction } = this.droneState;
            const x = position.x, invertedY = 11 - position.y;
            imgDrone.style.gridRowStart = `${invertedY}`;
            imgDrone.style.gridColumnStart = `${x}`;
        }
    }
}
function limitNumber(num, min = 0, max = 0) {
    return Math.max(min, Math.min(num, max));
}
