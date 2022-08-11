//You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else

var x = 9;
var y = 8;
var z = 9;

if (x == y && y == z){
console.log("Equilateral Triangle");
}

// Check for isosceles triangle
else if (x == y || y == z || z == x){
console.log("Isosceles Triangle");
}
// Otherwise scalene triangle
else {
console.log("Scalene Triangle");
}