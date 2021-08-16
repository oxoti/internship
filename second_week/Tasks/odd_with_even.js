const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const sum = (...numbers) => numbers.reduce((s) => s+=1)
const readNumbers = () => {
  return new Promise((r) => {
    rl.question("Please enter size ", (answer) => {
      const numbers = answer.split(",").map((x) => +x) // + to convert string to number
      r(sum(...numbers)); // sum all number
      rl.close();
    });
  });
};
var array=[];
readNumbers().then((sum) => {

    for(var i=0;i<sum;i++)
    {array[i]=i;}
    console.log(`aray before anyoperation: ${array}`);
    for(var i=0;i<sum;i++)
    {
        if(array[i] % 2 !== 0)
        array[i]=array[i]+1;
        
    }
    console.log(`aray after operation: `+ array);
 
});
