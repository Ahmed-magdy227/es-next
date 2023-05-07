import { Shape, Rectangle, Square, Circle } from "./moduleex.js";

let rectangleOne = new Rectangle(100, 50);
let squareOne = new Square(100);
let circleOne = new Circle(50);

console.log(rectangleOne.calcArea());
console.log(rectangleOne.clacParameter());
console.log(squareOne.calcArea());
console.log(squareOne.clacParameter());
console.log(circleOne.calcArea());
console.log(circleOne.clacDiameter());
