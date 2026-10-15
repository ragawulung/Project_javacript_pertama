const prompt = require("prompt-sync")({ sigint: true });
let s = Number(prompt("Sisi : "));
let volume = s * s * s;
let luasPermukaan = 6 * s * s;
console.log(`
Volume         : ${volume} cm3
Luas Permukaan : ${luasPermukaan} cm2`);