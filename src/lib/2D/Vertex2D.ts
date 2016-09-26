import { Vector2D } from "./Vector2D";

export class Vertex2D extends Vector2D {
  public translate(trVector: Vector2D) {
    if (!(trVector instanceof Vector2D)) {
      throw new TypeError("Invalid translation vector");
    }
    this.x += trVector.x;
    this.y += trVector.y;
  }
}
