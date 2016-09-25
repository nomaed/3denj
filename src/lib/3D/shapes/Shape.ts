import { Vector3D } from '../Vector3D';
import { Vertex3D } from '../Vertex3D';
import { Face } from '../Face';

export abstract class Shape {
  // Positional vertices, relative to origin
  public vertices: Array<Vertex3D> = [];
  public faces: Array<Face> = [];

  public translate(trVector: Vector3D) {
    for (let vertex of this.vertices) {
      vertex.translate(trVector);
    }
  }
}
