import { Shape } from "./Shape";
import { Face } from "./Face";
import { Vector3D } from "../Vector3D";
import { Vertex3D } from "../Vertex3D";
import { FaceColor } from "../../color/FaceColor";

export class Cube extends Shape {
  constructor(center: Vector3D, size: number, color?: FaceColor) {
    super(center);

    const d = size / 2;
    const ldf = new Vertex3D(center.x - d, center.y - d, center.z + d); // left  down front
    const ldb = new Vertex3D(center.x - d, center.y - d, center.z - d); // left  down back
    const rdb = new Vertex3D(center.x + d, center.y - d, center.z - d); // right down back
    const rdf = new Vertex3D(center.x + d, center.y - d, center.z + d); // right down front
    const ruf = new Vertex3D(center.x + d, center.y + d, center.z + d); // right up   front
    const rub = new Vertex3D(center.x + d, center.y + d, center.z - d); // right up   back
    const lub = new Vertex3D(center.x - d, center.y + d, center.z - d); // left  up   back
    const luf = new Vertex3D(center.x - d, center.y + d, center.z + d); // left  up   front

    this.setColor(color || new FaceColor());
    this.vertices = [ldf, ldb, rdb, rdf, ruf, rub, lub, luf];
    this.faces = [
      new Face(this.color, ldf, ldb, rdb, rdf),
      new Face(this.color, rdf, rdb, rub, ruf),
      new Face(this.color, ruf, rub, lub, luf),
      new Face(this.color, luf, lub, ldb, ldf),
      new Face(this.color, luf, ldf, rdf, ruf),
      new Face(this.color, ldb, lub, rub, rdb),
    ];
  }
}
