import DroneState from "./DroneState";
import Vector from "./Vector";

 

export type DroneStateListener = (droneState: DroneState) => void;

export default
class Game {
    private droneState: DroneState| null;
    private stateListeners: DroneStateListener[];
    private attackStage: number = 0;

    constructor(){
        this.droneState = null;
        this.stateListeners = [];
    }

    addStateListener(stateListener: DroneStateListener){
        const index = this.stateListeners.push(stateListener) - 1;
        return () => {
            this.stateListeners.splice(index,1);
        }
    }

    attack(){
        if(this.droneState)
        if(this.attackStage == 0){
            this.attackStage++;
            const posProjectile = this.getProjectilePosition();
            if(posProjectile){
                const imgProjectile = new Image();
                imgProjectile.id = "projectile";
                imgProjectile.src = "../assets/img/projectile.png";
                (document.getElementById("container-world") as HTMLDivElement).appendChild(imgProjectile);

                imgProjectile.style.gridRowStart = `${posProjectile.y}`;
                imgProjectile.style.gridColumnStart = `${posProjectile.x}`;
                imgProjectile.style.rotate = `${ this.droneState.direction }deg`

                setTimeout(() => {
                    this.attackStage++;
                    const peosProjectile = this.getProjectilePosition();
                    console.log(peosProjectile)
                    if(peosProjectile){
                         
                        const imgProjectile = (document.getElementById("projectile") as HTMLImageElement);
                        imgProjectile.src = ("../assets/img/explode.png");
        
                        imgProjectile.style.gridRowStart = `${peosProjectile.y}`;
                        imgProjectile.style.gridColumnStart = `${peosProjectile.x}`;
                        //imgProjectile.style.rotate = `${ this.droneState.direction }deg`
    
                        setTimeout(() => {
                            imgProjectile.remove();
                            this.attackStage = 0;
                        }, 500)
                    }
                }, 500)
            }else{
                this.attackStage = 0;
            }



        }
    }

    getProjectilePosition(){
        if(this.droneState){

            const { position, direction } = this.droneState;
            console.log("stage", this.attackStage);
            var _x = position.x, _y = position.y;
            switch(direction){
                case 0:
                    _y = position.y + this.attackStage;
                    if(position.y + 2 > 10) return null; else break;
                case 90:
                    _x = position.x + this.attackStage;
                    if(position.x + 2 > 10) return null; else break;
                case 180:
                    _y = position.y - this.attackStage;
                    if(position.y -2 < 0) return null; else break;
                    break;
                case 270:
                    _x = position.x - this.attackStage;
                    if(position.x - 2< 0) return null; else break;
                    break;                    break;
            }

          
            const invertedY = 11 - _y;
            return { x: _x, y: invertedY };
        }
        return null;
    }

    rotate(deg: number){
        if(this.droneState){
            this.droneState.direction += deg;
            this.droneState.direction %= 360;
        }

        this.updateUI();
    }

    move(){
        if(this.droneState){
            const { position, direction } = this.droneState;
            switch(direction){
                case 0:
                    position.y = Math.min(10, position.y + 1);
                    break;
                case 90:
                    position.x = Math.min(10, position.x + 1);
                    break
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

    private notifyStateListener(){
        if(this.droneState){
            this.stateListeners.forEach(stateListener => {
                //@ts-ignore
                stateListener(this.droneState);
            })
        }
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
            this.notifyStateListener();

        }
    }
}

function limitNumber(num: number, min: number = 0, max: number = 0){
    return Math.max(min, Math.min(num, max));
}

