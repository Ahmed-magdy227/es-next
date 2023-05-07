// task1
// let a=8
// let b=6
// console.log(a,b)
// let arr = [a,b ]=[b,a];

// console.log(arr)
//  task2
let arr1 = [22, 40, 850, 50, 100]
function minMax(...arr2) {
  return [(Math.min(...arr1)), (Math.max(...arr1))];
}
console.log(` min val is: ${minMax()[0]}, Max val is: ${minMax()[1]}`);
// ////////min max spread///////////
var max=Math.max(...arr1)
console.log(max);
var min=Math.min(...arr1)
console.log(min);
// tack3
let fruits = ["apple", "strawberry", "banana", "orange", "mango"];
let element = fruits.forEach((item) => console.log(item))
let string = fruits.every((str) => {
  if ((typeof str) == "string")
    return (typeof str)
});
console.log(string);
// /////////////////////////////////b/////////////////////////////////////
let startWithA = fruits.some((ele) => {
  return ele.startsWith("a");
})
console.log(startWithA);
// ////////////////////////////c////////////////////////////////////////////
let startWithBorS = fruits.filter((ele) => {
  if (ele.startsWith("b") || ele.startsWith("s")) {
    return ele;
  }
})
console.log(startWithBorS);
// //////////////////////////////////d e///////////////////////////////////////
var start = fruits.map((ele) => {

  return "i like " + ele
})
start.forEach(newEle => { console.log(newEle); })