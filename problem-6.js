// 6) You are given an array:
// var fruits = ['Apple', 'Banana', 'Orange'];
// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

var fruits = ['Apple', 'Banana', 'Orange'];

var index = fruits.indexOf('Banana');
console.log("Index of banana is:",index);

fruits[1]='Mango';
console.log("Mango Added:",fruits);

fruits.pop();
console.log("Remove:", fruits)

fruits.push('Watermelon')
console.log("Added:",fruits);
