const prompt = require("prompt-sync")({ sigint: true });
let p = Number(prompt("Panjang : "));
let l = Number(prompt("Lebar   : "));
let t = Number(prompt("Tinggi  : "));
let volume = p * l * t;
let luasPermukaan = 2 * (p * l + p * t + l * t);
console.log(`
Volume         : ${volume} cm3
Luas Permukaan : ${luasPermukaan} cm2`);