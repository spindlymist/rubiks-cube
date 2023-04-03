import Rotation from './Rotation.js';
import Axis from './Axis.js';

export default class Face {

    constructor(side, color) {
        this.side = side;

        if(typeof color === "undefined") {
            this.color = Face.COLOR_MAP[side];
        }
        else {
            this.color = color;
        }

        this.createElement();
    }

    createElement() {
        this.elem = document.createElement("div");
        this.elem.classList.add('face');
        this.elem.classList.add(this.side);
        this.elem.classList.add(this.color);
        this.elem.dataset.face = this.side;
    }

    getRotatedFace(axis, rotation) {
        return new Face(Face.ROTATION_MAP[this.side][axis][rotation], this.color);
    }

}

Face.RIGHT  = "right";
Face.LEFT   = "left";
Face.TOP    = "top";
Face.BOTTOM = "bottom";
Face.FRONT  = "front";
Face.BACK   = "back";
Face.COLOR_MAP = {
    [Face.RIGHT] : "green",
    [Face.LEFT]  : "blue",
    [Face.TOP]   : "white",
    [Face.BOTTOM]: "yellow",
    [Face.FRONT] : "orange",
    [Face.BACK]  : "red"
};
Face.ROTATION_MAP = {
    [Face.RIGHT]: {
        [Axis.X]: {
            [Rotation.CW] : Face.RIGHT,
            [Rotation.CCW]: Face.RIGHT
        },
        [Axis.Y]: {
            [Rotation.CW] : Face.FRONT,
            [Rotation.CCW]: Face.BACK
        },
        [Axis.Z]: {
            [Rotation.CW] : Face.BOTTOM,
            [Rotation.CCW]: Face.TOP
        }
    },
    [Face.LEFT]: {
        [Axis.X]: {
            [Rotation.CW] : Face.LEFT,
            [Rotation.CCW]: Face.LEFT
        },
        [Axis.Y]: {
            [Rotation.CW] : Face.BACK,
            [Rotation.CCW]: Face.FRONT
        },
        [Axis.Z]: {
            [Rotation.CW] : Face.TOP,
            [Rotation.CCW]: Face.BOTTOM
        }
    },
    [Face.TOP]: {
        [Axis.X]: {
            [Rotation.CW] : Face.BACK,
            [Rotation.CCW]: Face.FRONT
        },
        [Axis.Y]: {
            [Rotation.CW] : Face.TOP,
            [Rotation.CCW]: Face.TOP
        },
        [Axis.Z]: {
            [Rotation.CW] : Face.RIGHT,
            [Rotation.CCW]: Face.LEFT
        }
    },
    [Face.BOTTOM]: {
        [Axis.X]: {
            [Rotation.CW] : Face.FRONT,
            [Rotation.CCW]: Face.BACK
        },
        [Axis.Y]: {
            [Rotation.CW] : Face.BOTTOM,
            [Rotation.CCW]: Face.BOTTOM
        },
        [Axis.Z]: {
            [Rotation.CW] : Face.LEFT,
            [Rotation.CCW]: Face.RIGHT
        }
    },
    [Face.FRONT]: {
        [Axis.X]: {
            [Rotation.CW] : Face.TOP,
            [Rotation.CCW]: Face.BOTTOM
        },
        [Axis.Y]: {
            [Rotation.CW] : Face.LEFT,
            [Rotation.CCW]: Face.RIGHT
        },
        [Axis.Z]: {
            [Rotation.CW] : Face.FRONT,
            [Rotation.CCW]: Face.FRONT
        }
    },
    [Face.BACK]: {
        [Axis.X]: {
            [Rotation.CW] : Face.BOTTOM,
            [Rotation.CCW]: Face.TOP
        },
        [Axis.Y]: {
            [Rotation.CW] : Face.RIGHT,
            [Rotation.CCW]: Face.LEFT
        },
        [Axis.Z]: {
            [Rotation.CW] : Face.BACK,
            [Rotation.CCW]: Face.BACK
        }
    }
};
