import {Vertex3D} from "../Vertex3D";
import {FaceColor} from "../../color/FaceColor";
import {Vector3D} from "../Vector3D";
import {Face} from "../Face";

export abstract class Shape {
  // Positional vertices, relative to origin
  public vertices: Array<Vertex3D> = [];
  public faces: Array<Face> = [];

  // color
  public color: FaceColor;

  public translate(trVector: Vector3D) {
    for (const vertex of this.vertices) {
      vertex.translate(trVector);
    }
  }

  public rotate(center: Vector3D, theta: number, phi: number) {
    for (const vertex of this.vertices) {
      vertex.rotate(center, theta, phi);
    }
  }

  public setColor(color: FaceColor) {
    this.color = color;
    for (const face of this.faces) {
      face.color = this.color;
    }
  }
}
