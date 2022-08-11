//print all book price using for loop. If price greater than 200 it will skip & print other value.

var price =[199, 303,400,120,20,220];

for(let i=0; i<price.length; i++){
  const element=price[i];
  if(element>200){
    continue;
  }
  console.log(element);
}