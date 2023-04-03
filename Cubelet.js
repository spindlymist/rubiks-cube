export default class Cubelet {

    constructor(position, faces) {
        this.position = position;
        this.faces = faces;

        this.createElement();
    }

    createElement() {
        this.elem = document.createElement('div');
        this.elem.classList.add('cubelet');
        this.elem.classList.add(`pos_${this.position.x}_${this.position.y}_${this.position.z}`);

        this.faces.forEach(face => {
            this.elem.appendChild(face.elem);
        });
    }

    getRotatedFaces(axis, rotation) {
        return this.faces.map(face => face.getRotatedFace(axis, rotation));
    }

    updateFaces(newFaces) {
        this.faces.forEach(face => this.elem.removeChild(face.elem));
        this.faces = newFaces;
        this.faces.forEach(face => this.elem.appendChild(face.elem));
    }

}
