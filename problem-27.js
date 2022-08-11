//Write a function called make_avg() which will take an three integers and return the average of those values.

function make_avg(a,b,c){
  const total = a + b + c;
  const average =total/3;
  return average;
}
const ma =make_avg(4,4,8)
console.log(ma);