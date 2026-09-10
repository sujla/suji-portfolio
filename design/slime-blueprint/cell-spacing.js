export const cellSize=100/3;
export const separationGap=18;
export function cellPhase(progress){
 const t=Math.max(0,Math.min(1,progress));
 return {gap:separationGap*(1-t),merge:t};
}
export const cellCenters=Array.from({length:27},(_,i)=>[(Math.floor(i/9)-1)*cellSize,(Math.floor(i/3)%3-1)*cellSize,(i%3-1)*cellSize]);

// Preserve each separated sphere; stretch connecting surfaces continuously between cells.
export function spacingWeight(world){
 const t=Math.max(0,Math.min(1,(Math.abs(world)-13.5)/(cellSize-27)));
 return Math.sign(world)*t*t*(3-2*t);
}
