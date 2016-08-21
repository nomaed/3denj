import { Vector } from '../Vector';
import { Face } from '../Face';
import { Shape } from './Shape';
import { Vertex } from '../Vertex';
import { Square } from './Square';

export class Cube extends Shape {
  constructor(center: Vector, size: number) {
    super();

    const d = size / 2;

    this.vertices = [
      new Vertex(center.x - d, center.y - d, center.z + d),
      new Vertex(center.x - d, center.y - d, center.z - d),
      new Vertex(center.x + d, center.y - d, center.z - d),
      new Vertex(center.x + d, center.y - d, center.z + d),
      new Vertex(center.x + d, center.y + d, center.z + d),
      new Vertex(center.x + d, center.y + d, center.z - d),
      new Vertex(center.x - d, center.y + d, center.z - d),
      new Vertex(center.x - d, center.y + d, center.z + d)
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
