import { Vector3D } from './lib/3D/Vector3D';
import { Vertex3D } from './lib/3D/Vertex3D';
import { Face } from './lib/3D/Face';
import { Cube } from './lib/3D/shapes/Cube';
import { Shape } from './lib/3D/shapes/Shape';
import { Vector2D } from './lib/2D/Vector2D';

const cube = new Cube(new Vector3D(0, 0, 0), 200);

enum ProjectionType {
  Orthographic,
  Perspective
}

let timerVar: number;

export function Main(canvas: HTMLCanvasElement) {
  const canvas2d = canvas.getContext('2d');
  if (!canvas2d) return;
  canvas2d.strokeStyle = 'rgba(0, 0, 0, 0.3)';
  canvas2d.fillStyle = 'rgba(0, 150, 255, 0.3)';

  timerVar = setInterval(() => {
    cube.vertices.forEach(vertex => vertex.translate(new Vector3D(1, 1, 1)));
    render([cube], canvas2d, canvas.width / 2, canvas.height / 2);
  }, 10);
}

export function stop() {
  clearTimeout(timerVar);
}

/**
 * Renders shapes to canvas
 * @param {Shape[]} objects List of Shapes to render
 * @param {any}     ctx     Canvas
 * @param {number}  dx      Canvas width (px)
 * @param {number}  dy      Canvas height (px)
 */
function render(objects: Shape[], ctx: CanvasRenderingContext2D, dx: number, dy: number): void {
  const projType = ProjectionType.Perspective;
  ctx.clearRect(0, 0, 2 * dx, 2 * dy);

  // For each object
  for (let i = 0, n_obj = objects.length; i < n_obj; ++i) {
    // For each face
    for (let j = 0, n_faces = objects[i].faces.length; j < n_faces; ++j) {
      // Current face
      let face = objects[i].faces[j];

      // Draw the first vertex
      let P = project(projType, face.vertices[0]);
      ctx.beginPath();
      ctx.moveTo(P.x + dx, -P.y + dy);

      // Draw the other vertices
      for (let k = 1, n_vertices = face.vertices.length; k < n_vertices; ++k) {
        P = project(projType, face.vertices[k]);
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
      const dist = 50;
      const r = dist / vertex.position.y;

      return new Vector2D(r * vertex.position.x, r * vertex.position.z);
  }
}
