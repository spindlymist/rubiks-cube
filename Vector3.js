export default class Vector3 {

    constructor(x, y, z) {
        if (typeof x == "undefined" || typeof y == "undefined" || typeof z == "undefined") {
            this.x = 0;
            this.y = 0;
            this.z = 0;
        } else if (typeof x != "undefined" && x instanceof Vector3) {
            this.x = x.x;
            this.y = x.y;
        } else {
            this.x = x;
            this.y = y;
            this.z = z;
        }
    }

    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    normalize() {
        let mag = this.magnitude();
        this.x /= mag;
        this.y /= mag;
        this.z /= mag;
    }

    normalized() {
        let mag = this.magnitude();
        let norm = new Vector2(this.x / mag, this.y / mag, this.z / mag);
        return norm;
    }

    add(other) {
        this.x += other.x;
        this.y += other.y;
        this.z += other.z;
    }

    plus(other) {
        return new Vector3(this.x + other.x, this.y + other.y, this.z + other.z);
    }

    sub(other) {
        this.x -= other.x;
        this.y -= other.y;
        this.z -= other.z;
    }

    minus(other) {
        return new Vector3(this.x - other.x, this.y - other.y, this.z - other.z);
    }

    mult(x) {
        this.x *= x;
        this.y *= x;
        this.z *= x;
    }

    times(x) {
        return new Vector3(this.x * x, this.y * x, this.z * x);
    }

    dot(other) {
        return this.x * other.x + this.y * other.y + this.z * other.z;
    }

    toString() {
        return `[${this.x}, ${this.y}, ${this.z}]`;
    }

    equals(other) {
        return (this.x == other.x && this.y == other.y && this.z == other.z);
    }

}
