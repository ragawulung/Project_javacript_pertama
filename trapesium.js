const prompt = require("prompt-sync")({ sigint: true });
let sisiA = Number(prompt("Sisi sejajar A : "));
let sisiB = Number(prompt("Sisi sejajar B : "));
let tinggi = Number(prompt("Tinggi         : "));
let sisiC = Number(prompt("Sisi miring C  : "));
let sisiD = Number(prompt("Sisi miring D  : "));
let luas = 0.5 * (sisiA + sisiB) * tinggi;
let keliling = sisiA + sisiB + sisiC + sisiD;
console.log(`
Luas     : ${luas} cm2
Keliling : ${keliling} cm`);