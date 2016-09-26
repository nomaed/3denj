import { Vector3D } from "./lib/3D/Vector3D";
import { Vertex3D } from "./lib/3D/Vertex3D";
import { Face } from "./lib/3D/Face";
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

export function Main(canvas: HTMLCanvasElement) {
  const canvas2d = canvas.getContext("2d");
  if (!canvas2d) {
    throw new Error("Unable to create a canvas");
  }

  const dx = canvas.width / 2;
  const dy = canvas.height / 2;
  const center = new Vector3D(0, 11 * dy / 10, 0);

  const cube = new Cube(center, 100, new FaceColor(new RGBA(255, 128, 0, .3), new RGBA(128, 0, 0, .3)));
  const pyr = new Pyramid(center, 200, new FaceColor(new RGBA(0, 128, 255, .3), new RGBA(0, 0, 128, .3)));
  const shapes = [cube, pyr];

  const trVector = new Vector3D(.5, .5, .5);

  console.log("canvas: %d x %d", canvas.width, canvas.height);

  timerVar = setInterval(() => {
    shapes.forEach(shape => {
      // shape.translate(trVector);
      shape.rotate(center, Math.PI / 720, -Math.PI / 720);
    });
    render(shapes, canvas2d, dx, dy);
  }, 10);
}

export function stop() {
  clearTimeout(timerVar);
}

export function updateDist() {
  const el = <HTMLInputElement>document.getElementById("cam-dist");
  if (!el) return;
  cameraDistance = Number(el.value);
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
      return new Vector2D(vertex.position.x, vertex.position.z);

    case ProjectionType.Perspective:
      // Distance between the camera and the plane
      const r = cameraDistance / vertex.position.y;

      return new Vector2D(r * vertex.position.x, r * vertex.position.z);
  }
}
