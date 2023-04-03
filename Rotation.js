import Vector3 from './Vector3.js';
import Axis from './Axis.js';

export default class Rotation {

    static rotateVector(vector, axis, rotation) {
        let mat = Rotation.MATRICES[axis][rotation];
        let result = new Vector3();

        result.x = mat[0][0] * vector.x + mat[0][1] * vector.y + mat[0][2] * vector.z;
        result.y = mat[1][0] * vector.x + mat[1][1] * vector.y + mat[1][2] * vector.z;
        result.z = mat[2][0] * vector.x + mat[2][1] * vector.y + mat[2][2] * vector.z;
    
        return result;
    }

}

Rotation.CW = "clockwise";
Rotation.CCW = "counterclockwise";
Rotation.MATRICES = {
    [Axis.X]: {
        [Rotation.CW]: [
            [1, 0, 0],
            [0, 0, 1],
            [0, -1, 0]
        ],
        [Rotation.CCW]: [
            [1, 0, 0],
            [0, 0, -1],
            [0, 1, 0]
        ]
    },
    [Axis.Y]: {
        [Rotation.CW]: [
            [0, 0, -1],
            [0, 1, 0],
            [1, 0, 0]
        ],
        [Rotation.CCW]: [
            [0, 0, 1],
            [0, 1, 0],
            [-1, 0, 0]
        ]
    },
    [Axis.Z]: {
        [Rotation.CW]: [
            [0, 1, 0],
            [-1, 0, 0],
            [0, 0, 1]
        ],
        [Rotation.CCW]: [
            [0, -1, 0],
            [1, 0, 0],
            [0, 0, 1]
        ]
    }
}