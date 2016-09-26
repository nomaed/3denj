import { Vector3D } from "../Vector3D";
import { Shape } from "./Shape";
import { Vertex3D } from "../Vertex3D";
import { Square } from "./Square";
import { Face } from "../Face";
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
      // Base
      new Face(ldb, rdb, rdf, this.color),
      new Face(ldb, ldf, rdf, this.color),
      // Faces
      new Face(ldb, rdb, tip, this.color), // back
      new Face(ldf, rdf, tip, this.color), // front
      new Face(ldb, ldf, tip, this.color), // left
      new Face(rdb, rdf, tip, this.color), // right
    ];

  }


}
