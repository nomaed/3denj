export class Vector3D {
  constructor(public x: number,
              public y: number,
              public z: number) { }

  public translate(trVector: Vector3D) {
    this.x += trVector.x;
    this.y += trVector.y;
    this.z += trVector.z;
  }
}
