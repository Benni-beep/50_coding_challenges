// Create a function to calculate the distance between two points defined by their x, y
// coordinates

const point1 = { x: 1, y: 1 }
const point2 = { x: 1, y: 0 }

const distance = (p1, p2) => { return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)) };

console.log(distance(point1, point2));