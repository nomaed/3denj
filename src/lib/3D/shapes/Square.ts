import { Shape } from "./Shape";
import { Vertex3D } from "../Vertex3D";
import { Face } from "../Face";
import { FaceColor } from "../../color/FaceColor";

type TSquare = [Vertex3D, Vertex3D, Vertex3D, Vertex3D];

export class Square extends Shape {

  constructor(v1: Vertex3D, v2: Vertex3D, v3: Vertex3D, v4: Vertex3D, color?: FaceColor) {
    super();

    this.setColor(color || new FaceColor());
    this.vertices = [v1, v2, v3, v4];
    this.faces = [
      new Face(v1, v2, v3, this.color),
      new Face(v1, v4, v3, this.color),
    ];
  }
}
