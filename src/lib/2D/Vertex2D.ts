import { Vector2D } from "./Vector2D";

export class Vertex2D {
  public position: Vector2D;

  constructor(position: Vector2D);
  constructor(x: number, y: number);
  constructor(...args: any[]) {
    if (!args || !Array.isArray(args)) {
      throw new TypeError("Vertex2D cannot be created without a positional vector");
    }
    if (args.length === 1) {
      if (!(args[0] instanceof Vector2D)) {
        throw new TypeError("Invalid vector");
      }
      this.position = args[0];
    } else if (args.length === 2) {
      if (args.some(arg => typeof arg !== "number")) {
        throw new TypeError("Invalid coordinate, component not a number");
      }
      this.position = new Vector2D(args[0], args[1]);
    } else {
      throw new TypeError("Invalid vertex arguments");
    }
  }

  public translate(trVector: Vector2D) {
    this.position.translate(trVector);
  }
}
