import { Vector3D } from "./Vector3D";

export class Vertex3D extends Vector3D {
  public translate(trVector: Vector3D): any {
      if (!(trVector instanceof Vector3D)) {
      throw TypeError("Invalid translation vector");
    }
    this.x += trVector.x;
    this.y += trVector.y;
    this.z += trVector.z;
  }

  public rotate(center: Vector3D, theta: number, phi: number, roll = 0) {
      if (!(center instanceof Vector3D)) {
      throw TypeError("Invalid center vector");
    }
    if (typeof theta !== "number") {
      throw new TypeError("∠θ (z-axis rotation) is not a number");
    }
    if (typeof phi !== "number") {
      throw new TypeError("∠φ (x-axis rotation) is not a number");
    }
    if (typeof roll !== "number") {
      throw new TypeError("∠roll (y-axis rotation) is not a number");
    }

    // Rotation matrix coefficients
    const ct = Math.cos(theta);
    const st = Math.sin(theta);
    const cp = Math.cos(phi);
    const sp = Math.sin(phi);
    const cr = Math.cos(roll);
    const sr = Math.sin(roll);

    // Rotation
    const x = this.x - center.x;
    const y = this.y - center.y;
    const z = this.z - center.z;

    this.x = ct * x - st * cp * y + st * sp * z + center.x;
    this.y = st * x + ct * cp * y - ct * sp * z + center.y;
    this.z = sp * y + cp * z + center.z;

    // this.x = (cp * z - sp * y) * (st * y + ct * x) + center.x;
    // this.y = (sp * z + cp * y) * (ct * y - st * x) + center.y;
    // this.z = (cp * z - sp * y) * (sr * x + cr * z) + center.z;


/*
  X-axis
  x' = x
  y' = z*sin phi + y*cos phi
  z' = z*cos phi - y*sin phi

  Y-axis
  x' = x*cos roll - z*sin roll
  y' = y
  z' = x*sin roll + z*cos roll

  Z-axis
  x' = y*sin theta + x*cos theta
  y' = y*cos theta - x*sin theta
  z' = z
*/
  }
}
