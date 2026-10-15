const prompt = require("prompt-sync")({ sigint: true });
let alas = Number(prompt("Alas         : "));
let tinggi = Number(prompt("Tinggi       : "));
let sisiMiring = Number(prompt("Sisi miring  : "));
let luas = alas * tinggi;
let keliling = 2 * (alas + sisiMiring);
console.log(`
Luas     : ${luas} cm2
Keliling : ${keliling} cm`);