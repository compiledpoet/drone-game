export class VectorUtils {
    static move(vector, directionVector) {
        return {
            x: vector.x + directionVector.x,
            y: vector.y + directionVector.y
        };
    }
    static rotate({ x, y }, direction) {
        switch (direction) {
            case "LEFT":
                return { x: -y, y: x };
            case "RIGHT":
                return { x: y, y: -x };
        }
        return { x, y };
    }
}
