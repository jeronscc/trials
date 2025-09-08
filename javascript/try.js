let points = [{x: 10, y: 20}, {x: 0, y: 30}, {x: 20, y: 100}];
let r1 = points.some(e => e.x === 0)
let r2 = points.every(e => e.x === 0)
console.log(`${r1} ${r2}`);
