// Koristili smo prompt-sync node module kako bi mogli prihvatiti user input (npm install prompt-sync),
// alternativno smo mogli napraviti funkciju koja returna neki vec zadani broj
const prompt = require('prompt-sync')();
const iznos = prompt('Unesi iznos u kunama: ');
console.log("Iznos u eurima je", iznos/7.5345);