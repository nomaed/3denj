import { Vector } from './Vector';

export class Vertex {
  public position: Vector;

  constructor(position: Vector);
  constructor(x: number, y: number, z: number);
  constructor(...args: any[]) {
    if (!args || !Array.isArray(args)) {
      throw new TypeError('Vertex cannot be created without a positional vector');
    }
    if (args.length === 1) {
      if (!(args[0] instanceof Vector)) {
        throw new TypeError('Invalid vector');
      }
      this.position = args[0];
    } else if (args.length === 3) {
      if (args.some(arg => typeof arg !== 'number')) {
        throw new TypeError('Invalid coordinate, component not a number');
      }
      this.position = new Vector(args[0], args[1], args[2]);
    } else {
      throw new TypeError('Invalid vertex arguments');
    }
  }

  public translate(trVector: Vector) {
    this.position.translate(trVector);
  }
}
