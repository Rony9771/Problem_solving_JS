//Challenging: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr){
  let sum =0;
  for (let i =0; i<arr.length; i++){
    const element = arr[i];
    sum=sum+element;
    console.log(sum);
    
  }
  const average = sum/arr.length;
  return average;
  
}
const myArr = [23, 56, 70];
const ma = make_avg(myArr);
console.log(ma);