import Cube from './Cube.js';
import Rotation from './Rotation.js';
import Face from './Face.js';

let mousePosition = [0, 0];
let cube = new Cube(400);
document.body.appendChild(cube.elem);

document.querySelector('#rotateTopCW').addEventListener('click', _ => cube.rotate(Face.TOP, Rotation.CW));
document.querySelector('#rotateBottomCW').addEventListener('click', _ => cube.rotate(Face.BOTTOM, Rotation.CW));
document.querySelector('#rotateRightCW').addEventListener('click', _ => cube.rotate(Face.RIGHT, Rotation.CW));
document.querySelector('#rotateLeftCW').addEventListener('click', _ => cube.rotate(Face.LEFT, Rotation.CW));
document.querySelector('#rotateFrontCW').addEventListener('click', _ => cube.rotate(Face.FRONT, Rotation.CW));
document.querySelector('#rotateBackCW').addEventListener('click', _ => cube.rotate(Face.BACK, Rotation.CW));

document.querySelector('#rotateTopCCW').addEventListener('click', _ => cube.rotate(Face.TOP, Rotation.CCW));
document.querySelector('#rotateBottomCCW').addEventListener('click', _ => cube.rotate(Face.BOTTOM, Rotation.CCW));
document.querySelector('#rotateRightCCW').addEventListener('click', _ => cube.rotate(Face.RIGHT, Rotation.CCW));
document.querySelector('#rotateLeftCCW').addEventListener('click', _ => cube.rotate(Face.LEFT, Rotation.CCW));
document.querySelector('#rotateFrontCCW').addEventListener('click', _ => cube.rotate(Face.FRONT, Rotation.CCW));
document.querySelector('#rotateBackCCW').addEventListener('click', _ => cube.rotate(Face.BACK, Rotation.CCW));

document.addEventListener('mousemove', (e) => {
    mousePosition = [e.clientX, e.clientY];
});

document.addEventListener('keyup', (e) => {
    let key = e.key.toLowerCase();
    let targetFace = document.elementFromPoint(mousePosition[0], mousePosition[1]);
    
    if(targetFace.classList.contains('face')) {
        targetFace = targetFace.dataset.face;

        let reverse = false;
        if(targetFace == Face.BACK || targetFace == Face.BOTTOM || targetFace == Face.LEFT) {
            reverse = true;
        }

        if(key == 'a') {
            cube.rotate(targetFace, reverse ? Rotation.CW : Rotation.CCW);
        }
        else if(key == 'd') {
            cube.rotate(targetFace, reverse ? Rotation.CCW : Rotation.CW);
        }
    }

    if(key == 'w') {
        cube.elem.style.transform = 'perspective(1200px) rotateY(45deg) rotate3d(0.707, 0, 0.707, 22.5deg)';
    }
    else if(key == 's') {
        cube.elem.style.transform = 'perspective(1200px) rotateY(45deg) rotate3d(0.707, 0, 0.707, -22.5deg)';
    }
});
