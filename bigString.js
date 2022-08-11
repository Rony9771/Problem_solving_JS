const myString=["Hello" ,"nell", "Montti"];

function findBig(str){
  let result = str [0];

  for (let i=0; i<str.length; i++){
    const element = str[i];
     
    if(element>result){
      result=element;
    }
  }
  return result;
}

const bs=findBig(myString);
console.log(bs);