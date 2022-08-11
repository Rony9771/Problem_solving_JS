myNumber=[67,90,99,11,18,100];

function findBiggest(numbers){
  let result= numbers[0];
  for (let i=0; i<numbers.length; i++){
    const element = numbers[i].length;

    if (element > result){
      result=element;
    }
  }
  return result;
}
const fb=findBiggest(myNumber);
console.log(fb);