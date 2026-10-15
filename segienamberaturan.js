const prompt = require("prompt-sync")({ sigint: true });
let s = Number(prompt("Sisi : "));
let luas = ((3 * Math.sqrt(3)) / 2) * s * s;
let keliling = 6 * s;
console.log(`
Luas     : ${luas.toFixed(2)} cm2
Keliling : ${keliling} cm`);