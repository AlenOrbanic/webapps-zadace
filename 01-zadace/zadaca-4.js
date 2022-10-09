const prompt = require('prompt-sync')();
var polje=[];
var polje2=[];
duzina=prompt("Upiši veličinu polja: ")
for(let i=0; i<duzina; i++){
broj=prompt("Upiši broj: ")
polje2.push(broj);
if (broj%3==0) polje.push(broj);
}
console.log(polje2);
console.log("Brojevi djeljivi s 3: ",polje);