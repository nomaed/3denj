import { Vertex3D } from "../Vertex3D";
import { RGBA } from "../../color/RGBA";
import { FaceColor } from "../../color/FaceColor";

export class Face {
  public vertices: Vertex3D[];
  public color: FaceColor;

  constructor(color: FaceColor, ...vertices: Vertex3D[]) {
    if (!vertices.every(vertex => vertex instanceof Vertex3D)) {
      throw new TypeError("Invalid vertices");
    }
    if (color && !(color instanceof FaceColor)) {
      throw new TypeError("Invalid color");
    }
    this.vertices = [...vertices];
    this.color = color || new FaceColor();
  }
}
