export default class Axis {

    static toCSS(axis, degrees) {
        return `rotate${axis}(${degrees}deg)`;
    }

}

Axis.X = 'X';
Axis.Y = 'Y';
Axis.Z = 'Z';
