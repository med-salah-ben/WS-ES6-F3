// //assigning array items to variables
// const [a,b,c] = [123,"first",true];
// console.log(b)

//  //skipping items
//  const [ , ,z] = [123,"first","yesine",true,false];
//  console.log(z)

 // // assigning the first value , storing the rest 
//  const [x,y,...rest] = [365,"yesine",false,true,'wakeup',2]
//  console.log(rest)

//swapping variables 
let x=true;
let y = false;

[x,y]= [y,x];

console.log(y)