import { Vector3D } from "../Vector3D";
import { Shape } from "./Shape";
import { Face } from "./Face";
import { Vertex3D } from "../Vertex3D";
import { FaceColor } from "../../color/FaceColor";

export class Pyramid extends Shape {
  constructor(center: Vector3D, side: number, color?: FaceColor) {
    super();

    const d = side / 2;
    const ldf = new Vertex3D(center.x - d, center.y + d, center.z - d); // left  front down
    const ldb = new Vertex3D(center.x - d, center.y - d, center.z - d); // left  back  down
    const rdb = new Vertex3D(center.x + d, center.y - d, center.z - d); // right back  down
    const rdf = new Vertex3D(center.x + d, center.y + d, center.z - d); // right front down
    const tip = new Vertex3D(center.x, center.y, center.z + d); // center, center, up (tip)

    this.setColor(color || new FaceColor());
    this.vertices = [ldf, ldb, rdb, rdf, tip];
    this.faces = [
      new Face(this.color, ldb, rdb, rdf, ldf), // base
      new Face(this.color, ldb, rdb, tip), // back
      new Face(this.color, ldf, rdf, tip), // front
      new Face(this.color, ldb, ldf, tip), // left
      new Face(this.color, rdb, rdf, tip), // right
    ];

  }


}
