import { Vector3D } from "./Vector3D";

export class Vertex3D {
  public position: Vector3D;

  constructor(position: Vector3D);
  constructor(x: number, y: number, z: number);
  constructor(...args: any[]) {
    if (!args || !Array.isArray(args)) {
      throw new TypeError("Vertex cannot be created without a positional vector");
    }
    if (args.length === 1) {
      if (!(args[0] instanceof Vector3D)) {
        throw new TypeError("Invalid vector");
      }
      this.position = args[0];
    } else if (args.length === 3) {
      if (args.some(arg => typeof arg !== "number")) {
        throw new TypeError("Invalid coordinate, component not a number");
      }
      this.position = new Vector3D(args[0], args[1], args[2]);
    } else {
      throw new TypeError("Invalid vertex arguments");
    }
  }

  public translate(trVector: Vector3D) {
    this.position.translate(trVector);
  }

  public rotate(center: Vector3D, theta: number, phi: number) {
    this.position.rotate(center, theta, phi);
  }
}
