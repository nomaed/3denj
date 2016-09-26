import {Vertex3D} from "./Vertex3D";
import {RGBA} from "../color/RGBA";
import {FaceColor} from "../color/FaceColor";

type TFace = [Vertex3D, Vertex3D, Vertex3D];

export class Face {
  public vertices: TFace;
  public color: FaceColor;

  constructor(v1: Vertex3D, v2: Vertex3D, v3: Vertex3D, color?: FaceColor) {
    this.vertices = [
      v1, v2, v3
    ];
    this.color = color || new FaceColor();
  }
}
