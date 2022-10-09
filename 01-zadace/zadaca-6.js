const prompt = require('prompt-sync')();
const broj = prompt('Unesi neki broj: ');
if(broj >=0 && broj <=1000) console.log("Broj se nalazi unutar dometa!")
else console.log("Broj se ne nalazi unutar dometa!");
let zbroj=1;
for(let i=7; i<=broj; i+=7){
zbroj *= i;
}
console.log(zbroj);