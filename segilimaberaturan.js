const prompt = require("prompt-sync")({ sigint: true });
let s = Number(prompt("Sisi : "));
let luas = 0.25 * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * s * s;
let keliling = 5 * s;
console.log(`
Luas     : ${luas.toFixed(2)} cm2
Keliling : ${keliling} cm`);