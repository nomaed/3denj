import { Vertex } from './Vertex';

type TFace = [Vertex, Vertex, Vertex];

export class Face {
  public vertices: TFace;

  constructor(v1: Vertex, v2: Vertex, v3: Vertex);
  constructor(vertices: TFace);
  constructor(...args: any[]) {

    if (!args || !Array.isArray(args)) {
      throw new TypeError('Face cannot be created without 3 vertices');
    }
    if (args.length === 3) {
      if (args.some(vertex => !(vertex instanceof Vertex))) {
        throw new TypeError('Invalid vertices, not a Vertex');
      }
      this.vertices = [
        args[0], args[1], args[2]
      ];
    } else if (args.length === 1) {
      const triangle = <TFace>args[0];
      if (!Array.isArray(triangle)) {
        throw new TypeError('Invalid face vertex types');
      }
      this.vertices = triangle;
    } else {
      throw new TypeError('Invalid face vertices number, must be 3');
    }
  }
}
