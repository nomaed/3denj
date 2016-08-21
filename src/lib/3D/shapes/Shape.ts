import { Vector } from '../Vector';
import { Vertex } from '../Vertex';
import { Face } from '../Face';

export abstract class Shape {
  // Positional vertices, relative to origin
  public vertices: Array<Vertex> = [];
  public faces: Array<Face> = [];

  public translate(trVector: Vector) {
    for (let vertex of this.vertices) {
      vertex.translate(trVector);
    }
  }
}
