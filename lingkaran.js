const prompt = require("prompt-sync")({ sigint: true });
let r = Number(prompt("Jari-jari : "));
let phi = Math.PI;
let luas = phi * r * r;
let keliling = 2 * phi * r;
console.log(`
Luas     : ${luas.toFixed(2)} cm2
Keliling : ${keliling.toFixed(2)} cm`);