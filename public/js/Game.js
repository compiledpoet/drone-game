export default class Game {
    constructor() {
        this.droneState = null;
        this.stateListeners = [];
    }
    addStateListener(stateListener) {
        const index = this.stateListeners.push(stateListener) - 1;
        return () => {
            this.stateListeners.splice(index, 1);
        };
    }
    rotate(deg) {
        if (this.droneState) {
            this.droneState.direction += deg;
            this.droneState.direction %= 360;
        }
        this.updateUI();
    }
    move() {
        if (this.droneState) {
            const { position, direction } = this.droneState;
            switch (direction) {
                case 0:
                    position.y = Math.min(10, position.y + 1);
                    break;
                case 90:
                    position.x = Math.min(10, position.x + 1);
                    break;
                case 180:
                    position.y = Math.max(0, position.y - 1);
                    break;
                case 270:
                    position.x = Math.max(0, position.x - 1);
                    break;
            }
            this.updateUI();
        }
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
    notifyStateListener() {
        if (this.droneState) {
            this.stateListeners.forEach(stateListener => {
                //@ts-ignore
                stateListener(this.droneState);
            });
        }
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
            this.notifyStateListener();
        }
    }
}
function limitNumber(num, min = 0, max = 0) {
    return Math.max(min, Math.min(num, max));
}
