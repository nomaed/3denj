import { Vector3D } from "../Vector3D";
import { Face } from "../Face";
import { Shape } from "./Shape";
import { Vertex3D } from "../Vertex3D";
import { Square } from "./Square";

export class Cube extends Shape {
  constructor(center: Vector3D, size: number) {
    super();

    const d = size / 2;

    const ldf = new Vertex3D(center.x - d, center.y - d, center.z + d); // left  down front
    const ldb = new Vertex3D(center.x - d, center.y - d, center.z - d); // left  down back
    const rdb = new Vertex3D(center.x + d, center.y - d, center.z - d); // right down back
    const rdf = new Vertex3D(center.x + d, center.y - d, center.z + d); // right down front
    const ruf = new Vertex3D(center.x + d, center.y + d, center.z + d); // right up   front
    const rub = new Vertex3D(center.x + d, center.y + d, center.z - d); // right up   back
    const lub = new Vertex3D(center.x - d, center.y + d, center.z - d); // left  up   back
    const luf = new Vertex3D(center.x - d, center.y + d, center.z + d); // left  up   front

    this.vertices = [ ldf, ldb, rdb, rdf, ruf, rub, lub, luf ];

    this.faces = [
      ...new Square(ldf, ldb, rdb, rdf).faces,
      ...new Square(rdf, rdb, rub, ruf).faces,
      ...new Square(ruf, rub, lub, luf).faces,
      ...new Square(luf, lub, ldb, ldf).faces,
      ...new Square(luf, ldf, rdf, ruf).faces,
      ...new Square(ldb, lub, rub, rdb).faces,
    ];
  }
}
