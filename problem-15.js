// Daily rountine print in while loop

const rountine =['weak up', 'Take breakfast', 'Go to versity', 'back home'];

//here define index -1 bcz while loop first increase index
let i=rountine.length;
while(i>=1){
  i--;
  const element=rountine[i];
  console.log(element);
}