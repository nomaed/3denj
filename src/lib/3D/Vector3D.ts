export class Vector3D {
  public x: number;
  public y: number;
  public z: number;

  constructor(x: number, y: number, z: number) {
    if (typeof x !== "number") {
      throw new TypeError("X is not a number");
    }
    if (typeof y !== "number") {
      throw new TypeError("Y is not a number");
    }
    if (typeof z !== "number") {
      throw new TypeError("Z is not a number");
    }
    this.x = x;
    this.y = y;
    this.z = z;
  }

  public static add(a: Vector3D, b: Vector3D): Vector3D {
    return (new Vector3D(a.x, a.y, a.z)).add(b);
  }

  public static sub(a: Vector3D, b: Vector3D): Vector3D {
    return (new Vector3D(a.x, a.y, a.z)).sub(b);
  }

  public add(v: Vector3D): this {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  }

  public sub(v: Vector3D): this {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  }


  public copy(): Vector3D {
    return new Vector3D(this.x, this.y, this.z);
  }

  public toString(): string {
    return `[${this.x}, ${this.y}, ${this.z}]`;
  }

}
