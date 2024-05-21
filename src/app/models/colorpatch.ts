export class ColorPatch {
    constructor (
        private _r: number,
        private _g: number,
        private _b: number,
        private _a: number,
        private _name: string,
        private _id?: number) {
    }

    get r() {
        return this._r;
    }

    get g() {
        return this._g;
    }

    get b() {
        return this._b;
    }

    get a() {
        return this._a;
    }

    get name() {
        return this._name;
    }

    get rgba() {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
    }

    get id() {
        return this._id;
    }

    set r(r:number) {
        this._r = r;
    }

    set g(g:number) {
        this._g = g;
    }

    set b(b:number) {
        this._b = b;
    }

    set a(a:number) {
        this._a = a;
    }

    set name(name:string) {
        this._name = name;
    }

}