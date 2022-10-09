const prompt = require('prompt-sync')();
const broj = prompt('Unesi broj(minute): ');
var sati = Math.floor(broj/60)
var minute = broj%60
console.log("Ovo je ",sati," sati i ",minute," minuta");