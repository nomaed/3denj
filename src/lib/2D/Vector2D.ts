export class Vector2D {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    if (typeof x !== "number") {
      throw new TypeError("X is not a number");
    }
    if (typeof y !== "number") {
      throw new TypeError("Y is not a number");
    }
    this.x = x;
    this.y = y;
  }

  public static add(a: Vector2D, b: Vector2D): Vector2D {
    return (new Vector2D(a.x, a.y)).add(b);
  }

  public add(v: Vector2D): this {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  public toString(): string {
    return `[${this.x}, ${this.y}]`;
  }
}
