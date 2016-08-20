import {Vector} from '../Vector';
import {Shape3D} from './Shape3D';
import {Vertex} from './Vertex';
import {Square} from './Square';

export class Cube extends Shape3D {
  public faces: Array<Square> = [];

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
      new Square(this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3]),
      new Square(this.vertices[3], this.vertices[2], this.vertices[5], this.vertices[4]),
      new Square(this.vertices[4], this.vertices[5], this.vertices[6], this.vertices[7]),
      new Square(this.vertices[7], this.vertices[6], this.vertices[1], this.vertices[0]),
      new Square(this.vertices[7], this.vertices[0], this.vertices[3], this.vertices[4]),
      new Square(this.vertices[1], this.vertices[6], this.vertices[5], this.vertices[2])
    ];
  }
}
