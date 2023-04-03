import Face from './Face.js';
import Vector3 from './Vector3.js';
import Cubelet from './Cubelet.js';
import Rotation from './Rotation.js';
import Axis from './Axis.js';

export default class Cube {

    constructor(rotateDuration) {
        this.rotateDuration = rotateDuration;
        this.isRotating = false;
        this.faces = {
            [Face.RIGHT] : [],
            [Face.LEFT]  : [],
            [Face.TOP]   : [],
            [Face.BOTTOM]: [],
            [Face.FRONT] : [],
            [Face.BACK]  : [],
        };

        this.createElement();
        this.createCubelets();
    }

    createCubelets() {
        this.cubelets = {};

        for(let x = -1; x <= 1; x++) {
            this.cubelets[x] = {};

            for(let y = -1; y <= 1; y++) {
                this.cubelets[x][y] = {};

                for(let z = -1; z <= 1; z++) {
                    if(x == 0 && y == 0 && z == 0) continue;

                    let position = new Vector3(x, y, z);

                    let faces = [
                        Cube.X_MAP[x + 1],
                        Cube.Y_MAP[y + 1],
                        Cube.Z_MAP[z + 1]
                    ];
                    faces = faces.filter(face => face !== null);
                    faces = faces.map(face => new Face(face));

                    let cubelet = new Cubelet(position, faces);
                    this.addToFaces(cubelet);

                    this.elem.appendChild(cubelet.elem);
                }
            }
        }
    }

    addToFaces(cubelet) {
        if(cubelet.position.x == -1) this.faces[Face.LEFT].push(cubelet);
        if(cubelet.position.x == 1)  this.faces[Face.RIGHT].push(cubelet);
        if(cubelet.position.y == -1) this.faces[Face.BOTTOM].push(cubelet);
        if(cubelet.position.y == 1)  this.faces[Face.TOP].push(cubelet);
        if(cubelet.position.z == -1) this.faces[Face.BACK].push(cubelet);
        if(cubelet.position.z == 1)  this.faces[Face.FRONT].push(cubelet);
    }

    createElement() {
        this.elem = document.createElement('div');
        this.elem.classList.add('cube');
    }

    rotate(face, rotation) {
        if(this.isRotating) return;
        this.isRotating = true;

        let rotationContainer = document.createElement('div');
        rotationContainer.classList.add('rotation-container');
        this.elem.appendChild(rotationContainer);

        this.faces[face].forEach(cubelet => {
            rotationContainer.appendChild(cubelet.elem);
        });

        void rotationContainer.offsetWidth;

        let axis = Cube.FACE_AXES[face];
        let rotationDegrees = (rotation == Rotation.CW) ? 90 : -90;
        if(axis == Axis.Y) rotationDegrees *= -1;
        
        rotationContainer.style.transform = Axis.toCSS(axis, rotationDegrees);

        setTimeout(() => {
            this.faces[face].forEach(cubelet => {
                let rotatedFaces = cubelet.getRotatedFaces(axis, rotation);
                let newPos = Rotation.rotateVector(cubelet.position, axis, rotation);
                this.cubelets[newPos.x][newPos.y][newPos.z] = rotatedFaces;
            });

            this.faces[face].forEach(cubelet => {
                cubelet.updateFaces(this.cubelets[cubelet.position.x][cubelet.position.y][cubelet.position.z]);
                this.elem.appendChild(cubelet.elem);
            });

            this.elem.removeChild(rotationContainer);
            this.isRotating = false;
        }, this.rotateDuration);
    }

}

Cube.X_MAP = [Face.LEFT, null, Face.RIGHT];
Cube.Y_MAP = [Face.BOTTOM, null, Face.TOP];
Cube.Z_MAP = [Face.BACK, null, Face.FRONT];
Cube.FACE_AXES = {
    [Face.RIGHT] : Axis.X,
    [Face.LEFT]  : Axis.X,
    [Face.TOP]   : Axis.Y,
    [Face.BOTTOM]: Axis.Y,
    [Face.FRONT] : Axis.Z,
    [Face.BACK]  : Axis.Z,
};
