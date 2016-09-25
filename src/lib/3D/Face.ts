import { Vertex3D } from './Vertex3D';

type TFace = [Vertex3D, Vertex3D, Vertex3D];

export class Face {
  public vertices: TFace;

  constructor(v1: Vertex3D, v2: Vertex3D, v3: Vertex3D);
  constructor(vertices: TFace);
  constructor(...args: any[]) {

    if (!args || !Array.isArray(args)) {
      throw new TypeError('Face cannot be created without 3 vertices');
    }
    if (args.length === 3) {
      if (args.some(vertex => !(vertex instanceof Vertex3D))) {
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
