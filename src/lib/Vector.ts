export class Vector {
  constructor(public x: number,
              public y: number,
              public z: number) { }

  public translate(trVector: Vector) {
    this.x += trVector.x;
    this.y += trVector.y;
    this.z += trVector.z;
  }
}
