const prompt = require('prompt-sync')();
var polje=[];
duzina=prompt("Upiši veličinu polja: ")
for(let i=0; i<duzina; i++){
broj=prompt("Upiši broj: ")
if (broj%3==0) polje.push(broj);
}
console.log(polje);