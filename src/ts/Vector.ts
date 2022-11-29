


export default
interface Vector {
    x: number,
    y: number
}

export type RotationDirection = "LEFT" | "RIGHT";

export class VectorUtils {

    static move(vector:Vector, directionVector: Vector): Vector{
        return { 
            x: vector.x + directionVector.x,
            y: vector.y + directionVector.y
        };
    }

    static rotate({ x, y}: Vector, direction: RotationDirection): Vector{
        switch(direction){
            case "LEFT":
                return { x: -y, y: x }
            case "RIGHT":
                return { x: y, y: -x};
        }
        return { x, y };
    }
}