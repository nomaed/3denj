import { Vector3D } from '../Vector3D';
import { Face } from '../Face';
import { Shape } from './Shape';
import { Vertex3D } from '../Vertex3D';
import { Square } from './Square';

export class Cube extends Shape {
  constructor(center: Vector3D, size: number) {
    super();

    const d = size / 2;

    this.vertices = [
      new Vertex3D(center.x - d, center.y - d, center.z + d),
      new Vertex3D(center.x - d, center.y - d, center.z - d),
      new Vertex3D(center.x + d, center.y - d, center.z - d),
      new Vertex3D(center.x + d, center.y - d, center.z + d),
      new Vertex3D(center.x + d, center.y + d, center.z + d),
      new Vertex3D(center.x + d, center.y + d, center.z - d),
      new Vertex3D(center.x - d, center.y + d, center.z - d),
      new Vertex3D(center.x - d, center.y + d, center.z + d)
    ];

    this.faces = [
      ...new Square(this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3]).faces,
      ...new Square(this.vertices[3], this.vertices[2], this.vertices[5], this.vertices[4]).faces,
      ...new Square(this.vertices[4], this.vertices[5], this.vertices[6], this.vertices[7]).faces,
      ...new Square(this.vertices[7], this.vertices[6], this.vertices[1], this.vertices[0]).faces,
      ...new Square(this.vertices[7], this.vertices[0], this.vertices[3], this.vertices[4]).faces,
      ...new Square(this.vertices[1], this.vertices[6], this.vertices[5], this.vertices[2]).faces
    ];
  }
}
