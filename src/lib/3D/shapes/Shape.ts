import { Face } from "./Face";
import { Vertex3D } from "../Vertex3D";
import { FaceColor } from "../../color/FaceColor";
import { Vector3D } from "../Vector3D";

export abstract class Shape {
  // Positional vertices, relative to origin
  public origin: Vector3D;
  public vertices: Array<Vertex3D> = [];
  public faces: Array<Face> = [];

  // color
  public color: FaceColor;

  constructor(origin?: Vector3D) {
    if (origin && !(origin instanceof Vector3D)) {
      throw new TypeError("Invalid origin");
    }
    this.origin = origin || new Vector3D(0, 0, 0);
  }

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
    if (!(color instanceof FaceColor)) {
      throw new TypeError("Invalid color");
    }
    this.color = color;
    for (const face of this.faces) {
      face.color = this.color;
    }
  }

  public toString(): string {
    return this.vertices.toString();
  }
}
