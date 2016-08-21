import { Vector } from './lib/3D/Vector';
import { Cube } from './lib/3D/shapes/Cube';
import { Shape } from './lib/3D/shapes/Shape';
import { Vector2D } from './lib/2D/Vector2D';

const cube = new Cube(new Vector(0, 0, 0), 200);

function render(objects: Shape[], ctx: any, dx: any, dy: any) {
  // For each object
  for (let i = 0, n_obj = objects.length; i < n_obj; ++i) {
    // For each face
    for (let j = 0, n_faces = objects[i].faces.length; j < n_faces; ++j) {
      // Current face
      let face = objects[i].faces[j];

      // Draw the first vertex
      let P = project(face[0]);
      ctx.beginPath();
      ctx.moveTo(P.x + dx, -P.y + dy);

      // Draw the other vertices
      for (let k = 1, n_vertices = face.vertices.length; k < n_vertices; ++k) {
        P = project(face[k]);
        ctx.lineTo(P.x + dx, -P.y + dy);
      }

      // Close the path and draw the face
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    }
  }
}

function project(...args: any[]): Vector2D {
  return new Vector2D(0, 0);
}
