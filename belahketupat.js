const prompt = require("prompt-sync")({ sigint: true });
let d1 = Number(prompt("Diagonal 1 : "));
let d2 = Number(prompt("Diagonal 2 : "));
let sisi = Number(prompt("Sisi       : "));
let luas = 0.5 * d1 * d2;
let keliling = 4 * sisi;
console.log(`
Luas     : ${luas} cm2
Keliling : ${keliling} cm`);