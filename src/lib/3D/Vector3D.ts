export class Vector3D {
  constructor(public x: number,
    public y: number,
    public z: number) { }

  public translate(x: number, y: number, z: number): void;
  public translate(trVector: Vector3D): void;
  public translate(...args: any[]) {
    if (args.length === 1 && args[0] instanceof Vector3D) {
      const trVector = args[0];
      this.x += trVector.x;
      this.y += trVector.y;
      this.z += trVector.z;
    } else if (args.length === 3 && [args[0], args[1], args[2]].every(arg => typeof arg === "number")) {
      this.x += args[0];
      this.y += args[1];
      this.z += args[2];
    } else {
      throw TypeError("Invalid translation parameters, must be a Vector3D or x, y & z values");
    }
  }

  public rotate(center: Vector3D, theta: number, phi: number) {
    // Rotation matrix coefficients
    const ct = Math.cos(theta);
    const st = Math.sin(theta);
    const cp = Math.cos(phi);
    const sp = Math.sin(phi);

    // Rotation
    const x = this.x - center.x;
    const y = this.y - center.y;
    const z = this.z - center.z;

    this.x = ct * x - st * cp * y + st * sp * z + center.x;
    this.y = st * x + ct * cp * y - ct * sp * z + center.y;
    this.z = sp * y + cp * z + center.z;

  }
}
