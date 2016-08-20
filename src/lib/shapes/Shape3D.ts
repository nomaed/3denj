import { Vector } from '../Vector';
import { Vertex } from './Vertex';

export abstract class Shape3D {
  // Positional vertices, relative to origin
  public vertices: Array<Vertex> = [];

  public translate(trVector: Vector) {
    for (let vertex of this.vertices) {
      vertex.translate(trVector);
    }
  }
}
