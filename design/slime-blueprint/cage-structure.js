// Modeling units: cube edge = 100. Surface lattice only, no internal bars.
export const cageSpec = Object.freeze({ edge: 100, divisions: 3, rodDiameter: .95, jointDiameter: 3.4 });

export function createCageStructure({ edge = 100, divisions = 3 } = {}) {
  const nodes = [], segments = [], faces = [];
  const byKey = new Map();
  const boundary = (p) => p.some(v => v === 0 || v === divisions);
  const key = (p) => p.join(',');
  for (let x = 0; x <= divisions; x++) for (let y = 0; y <= divisions; y++) for (let z = 0; z <= divisions; z++) {
    const lattice = [x, y, z];
    if (!boundary(lattice)) continue;
    const id = nodes.length;
    nodes.push({ id, lattice, position: lattice.map(v => (v / divisions - .5) * edge) });
    byKey.set(key(lattice), id);
  }
  for (const node of nodes) for (let axis = 0; axis < 3; axis++) {
    if (node.lattice[axis] === divisions) continue;
    const end = [...node.lattice]; end[axis]++;
    const endId = byKey.get(key(end));
    // An entire segment must lie on at least one fixed exterior plane.
    const onFace = node.lattice.some((v, a) => a !== axis && (v === 0 || v === divisions));
    if (endId !== undefined && onFace) segments.push({ start: node.id, end: endId, axis });
  }
  for (let axis = 0; axis < 3; axis++) for (const side of [0, divisions]) {
    const a = (axis + 1) % 3, b = (axis + 2) % 3;
    for (let u = 0; u < divisions; u++) for (let v = 0; v < divisions; v++) {
      const corners = [[u, v], [u + 1, v], [u + 1, v + 1], [u, v + 1]].map(([i, j]) => {
        const p = [0, 0, 0]; p[axis] = side; p[a] = i; p[b] = j;
        return byKey.get(key(p));
      });
      faces.push({ axis, side, nodes: corners });
    }
  }
  return { edge, divisions, nodes, segments, faces };
}
