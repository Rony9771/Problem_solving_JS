//8) You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else.

var number1 = 13;
var number2 = 79;
var number3 = 45;

if(number1>number2 && number1>number3){
  console.log("Number one is a Biggest")
}

else if(number2>number1 && number2>number3){
  console.log("Number two is a Biggest")
}
else {
  console.log("Number three is a biggest")
}