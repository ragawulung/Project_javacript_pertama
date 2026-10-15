const prompt = require("prompt-sync")({ sigint: true });
let p = Number(prompt("Panjang : "));
let l = Number(prompt("Lebar   : "));
let luas = p * l;
let keliling = 2 * (p + l);
console.log(`
Luas     : ${luas} cm2
Keliling : ${keliling} cm`);