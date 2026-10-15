const prompt = require("prompt-sync")({ sigint: true });
let d1 = Number(prompt("Diagonal 1 : "));
let d2 = Number(prompt("Diagonal 2 : "));
let a = Number(prompt("Sisi a     : "));
let b = Number(prompt("Sisi b     : "));
let luas = 0.5 * d1 * d2;
let keliling = 2 * (a + b);
console.log(`
Luas     : ${luas} cm2
Keliling : ${keliling} cm`);