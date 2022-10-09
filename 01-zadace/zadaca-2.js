const prompt = require('prompt-sync')();
const broj = prompt('Unesi neki broj: ');
if(broj >= 100 && broj <=15000){
    console.log("Broj se nalazi unutar dometa!");
} else console.log("Broj se ne nalazi unutar dometa!");