import { Vector } from './lib/3D/Vector';
import { Vertex } from './lib/3D/Vertex';
import { Face } from './lib/3D/Face';
import { Cube } from './lib/3D/shapes/Cube';
import { Shape } from './lib/3D/shapes/Shape';
import { Vector2D } from './lib/2D/Vector2D';

const cube = new Cube(new Vector(0, 0, 0), 200);

enum ProjectionType {
  Orthographic,
  Perspective
}

/**
 * Renders shapes to canvas
 * @param {Shape[]} objects List of Shapes to render
 * @param {any}     ctx     Canvas
 * @param {number}  dx      Canvas width (px)
 * @param {number}  dy      Canvas height (px)
 */
function render(objects: Shape[], ctx: any, dx: number, dy: number): void {
  const projType = ProjectionType.Orthographic;

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
        P = project(projType, face[k]);
        ctx.lineTo(P.x + dx, -P.y + dy);
      }

      // Close the path and draw the face
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    }
  }
}

function project(projType: ProjectionType, vertex: Vertex): Vector2D {
  switch (projType) {
    case ProjectionType.Orthographic:
      return new Vector2D(vertex.position.x, vertex.position.z);

    case ProjectionType.Perspective:
      // Distance between the camera and the plane
      const dist = 200;
      const r = dist / vertex.position.y;

      return new Vector2D(r * vertex.position.x, r * vertex.position.z);
  }
}
