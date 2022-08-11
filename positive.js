function printPositive(number){
   let result = [0];
  for (let i=0; i<number.length; i++){
    const element = number[i];
    
    if(element >= 0){
      result.push(number[i])
    }
    else {
      break ;

    }
      
    }
    return result ;
  }
  


const myNumber=[1,3,4,6,7,-9,1,5];
const pp =printPositive(myNumber);
console.log(pp);
