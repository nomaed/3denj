export class RGBA {
  constructor(public r: number, public g: number, public b: number, public a: number = 1) {
    this.isValid();
  }

  public css(): string {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }

  public isValid() {
    if (![this.r, this.g, this.b].every(val => RGBA._inRange(val, 0, 255))) {
      throw new TypeError("Invalid color component");
    }
    if (!RGBA._inRange(this.a, 0, 1)) {
      throw new TypeError("Invalid alpha value");
    }
  }

  private static _inRange(val: any, min: number, max: number): boolean {
    return typeof val === "number" && val >= min && val <= max;
  }
}
