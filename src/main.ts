import { Vector3D } from "./lib/3D/Vector3D";
import { Vertex3D } from "./lib/3D/Vertex3D";
import { Face } from "./lib/3D/shapes/Face";
import { Cube } from "./lib/3D/shapes/Cube";
import { Shape } from "./lib/3D/shapes/Shape";
import { Vector2D } from "./lib/2D/Vector2D";
import { Pyramid } from "./lib/3D/shapes/Pyramid";
import { FaceColor } from "./lib/color/FaceColor";
import { RGBA } from "./lib/color/RGBA";

enum ProjectionType {
  Orthographic,
  Perspective
}
const PROJECTION = ProjectionType.Perspective;
// const PROJECTION = ProjectionType.Orthographic;

let timerVar: number;
let cameraDistance: number = 200;

let dx: number;
let dy: number;
let center: Vector3D;
let shapes: Array<Shape>;
let canvas2d: CanvasRenderingContext2D;

export function Main(canvas: HTMLCanvasElement) {
  let canvasObj = canvas.getContext("2d");
  if (!canvasObj) {
    throw new Error("Unable to create a canvas");
  } else {
    canvas2d = canvasObj;
    console.log("canvas: %d x %d", canvas.width, canvas.height);
  }

  dx = canvas.width / 2;
  dy = canvas.height / 2;
  center = new Vector3D(0, 1000, 0);

  const cube = new Cube(center, 200, new FaceColor(new RGBA(255, 128, 0, .3), new RGBA(128, 0, 0, .3)));
  const pyr = new Pyramid(Vector3D.add(center, new Vector3D(0, 0, 200)), 200, new FaceColor(new RGBA(0, 128, 255, .3), new RGBA(0, 0, 128, .3)));

  shapes = [cube, pyr];

  // const trVector = new Vector3D(.5, .5, .5);
  // timerVar = setInterval(() => {
  //   shapes.forEach(shape => {
  //     // shape.translate(trVector);
  //     shape.rotate(center, Math.PI / (720 * 2), -Math.PI / (720 * 3));
  //   });
  //   render(shapes, canvas2d, dx, dy);
  // }, 10);
  draw();
}

export function stop() {
  clearTimeout(timerVar);
}

export function updateDist() {
  const el = <HTMLInputElement>document.getElementById("cam-dist");
  if (!el) return;
  cameraDistance = Number(el.value);
  draw();
}

export function rotate(theta: number, phi: number) {
  shapes.forEach(shape => {
    shape.rotate(center, Math.PI / 45  * theta, Math.PI / 45 * phi);
  });
  draw();
}

export function objectY(y: number) {
  shapes.forEach(shape => {
    shape.vertices;
  });
  draw();
}


function draw() {
  render(shapes, canvas2d!, dx, dy);
}

/**
 * Renders shapes to canvas
 * @param {Shape[]} objects List of Shapes to render
 * @param {any}     ctx     Canvas
 * @param {number}  dx      Canvas width (px)
 * @param {number}  dy      Canvas height (px)
 */
function render(objects: Shape[], ctx: CanvasRenderingContext2D, dx: number, dy: number): void {
  ctx.clearRect(0, 0, 2 * dx, 2 * dy);

  // For each object
  for (let i = 0, n_obj = objects.length; i < n_obj; ++i) {
    // For each face
    for (let j = 0, n_faces = objects[i].faces.length; j < n_faces; ++j) {
      // Current face
      let face = objects[i].faces[j];

      ctx.strokeStyle = face.color.stroke.css();
      ctx.fillStyle = face.color.fill.css();

      ctx.beginPath();

      // Draw the vertices
      for (let k = 0, n_vertices = face.vertices.length; k < n_vertices; ++k) {
        const P = project(PROJECTION, face.vertices[k]);
        ctx.lineTo(P.x + dx, -P.y + dy);
      }

      // Close the path and draw the face
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    }
  }
}

function project(projType: ProjectionType, vertex: Vertex3D): Vector2D {
  switch (projType) {
    case ProjectionType.Orthographic:
      return new Vector2D(vertex.x, vertex.z);

    case ProjectionType.Perspective:
      // Distance between the camera and the plane
      const r = cameraDistance / vertex.y;

      return new Vector2D(r * vertex.x, r * vertex.z);
  }
}
