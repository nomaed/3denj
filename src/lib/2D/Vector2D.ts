export class Vector2D {
  constructor(public x: number,
              public y: number) { }

  public translate(trVector: Vector2D) {
    this.x += trVector.x;
    this.y += trVector.y;
  }
}
