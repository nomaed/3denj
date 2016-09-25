import { Vertex3D } from '../Vertex3D';
import { Face } from '../Face';
import { Shape } from './Shape';

type TSquare = [Vertex3D, Vertex3D, Vertex3D, Vertex3D];

export class Square extends Shape {

  constructor(v1: Vertex3D, v2: Vertex3D, v3: Vertex3D, v4: Vertex3D);
  constructor(vertices: TSquare);
  constructor(...args: any[]) {
    super();

    // validate arguments and set vertices
    if (!args || !Array.isArray(args)) {
      throw new TypeError('Square cannot be created without vertices');
    }
    if (args.length === 4) {
      if (args.some(vertex => !(vertex instanceof Vertex3D))) {
        throw new TypeError('Invalid vertices provided');
      }
      this.vertices = [
        args[0], args[1], args[2], args[3]
      ];
    } else if (args.length === 1) {
      const square = <TSquare>args[0];
      if (!Array.isArray(square)) {
        throw new TypeError('Invalid square vertex types');
      }
      this.vertices = square;
    } else {
      throw new TypeError('Invalid square vertices provided');
    }

    // Map vertices into 2 triangles
    this.faces = [
      new Face(this.vertices[0], this.vertices[1], this.vertices[2]),
      new Face(this.vertices[0], this.vertices[2], this.vertices[3])
    ];
  }
}
