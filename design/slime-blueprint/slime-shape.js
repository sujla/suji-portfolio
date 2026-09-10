// Artist-authored volumes in the same 100 U cube coordinates as cage-structure.js.
// +Z is the front face, +X the visible right face. Hidden volumes are inferred.
export const slimeShape = Object.freeze({
  smoothUnion: 10,
  lobes: [
    { name: 'interior bridge', center: [0, 0, 0], radii: [34, 39, 34] },
    { name: 'crown', center: [-3, 47, -1], radii: [28, 20, 29], tilt: -.12 },
    { name: 'upper left shoulder', center: [-31, 24, 24], radii: [27, 25, 29], tilt: -.18 },
    { name: 'upper front swell', center: [-7, 22, 34], radii: [25, 29, 25], tilt: .12 },
    { name: 'upper right shoulder', center: [28, 21, 27], radii: [24, 26, 25], tilt: .12 },
    { name: 'long middle front fold', center: [-20, -10, 39], radii: [20, 38, 24], tilt: -.24 },
    { name: 'long lower front tongue', center: [27, -13, 34], radii: [23, 37, 25], tilt: .06 },
    { name: 'lower left fold', center: [-33, -28, 22], radii: [23, 21, 26], tilt: .16 },
    { name: 'lower interior bridge', center: [-4, -34, 15], radii: [24, 19, 30] },
    { name: 'right upper side', center: [35, 23, -14], radii: [24, 26, 28], tilt: -.14 },
    { name: 'right lower side', center: [36, -22, -8], radii: [23, 27, 30], tilt: .12 },
    { name: 'rear upper inferred', center: [-15, 20, -32], radii: [33, 27, 24] },
    { name: 'rear lower inferred', center: [-15, -23, -31], radii: [30, 28, 24] },
  ],
  hollows: [
    { name: 'left waist', center: [-56, -3, 30], radii: [19, 13, 31] },
  ],
});
