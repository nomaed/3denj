import { Shape3D } from './Shape3D';
import { Vertex } from './Vertex';

type TTriangle = [Vertex, Vertex, Vertex];

export class Triangle extends Shape3D {
  constructor(v1: Vertex, v2: Vertex, v3: Vertex);
  constructor(vertices: TTriangle);
  constructor(...args: any[]) {
    super();
    if (!args || !Array.isArray(args)) {
      throw new TypeError('Triangle cannot be created without vertices');
    }
    if (args.length === 3) {
      if (args.some(vertex => !(vertex instanceof Vertex))) {
        throw new TypeError('Invalid vertices, not a Vertex');
      }
      this.vertices = [
        args[0], args[1], args[2], args[3]
      ];
    } else if (args.length === 1) {
      const triangle = <TTriangle>args[0];
      if (!Array.isArray(triangle)) {
        throw new TypeError('Invalid triangle vertex types');
      }
      this.vertices = triangle;
    } else {
      throw new TypeError('Invalid triangle vertices number');
    }
  }
}
