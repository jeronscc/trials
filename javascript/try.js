let point = { x: 0, y: 0 };
let coloredPoint = { color: "red" };

Object.setPrototypeOf(coloredPoint, point);

console.log(coloredPoint.color);