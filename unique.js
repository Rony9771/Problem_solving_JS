
function nameUnique(names){
  const unique= [];
  for (let i=0; i<names.length; i++){
    const name = names[i];

    if(unique.includes(name)===false){
      unique.push(name);
    }
  }
  return unique;
}
const arrName =["Rony", "Ahmed", "Nabil", "Kabil", "Rony", "Nabil","Pranto"];
const ua =nameUnique(arrName);
console.log(ua);