const prompt = require("prompt-sync")({ sigint: true });
let r = Number(prompt("Jari-jari : "));
let phi = Math.PI;
let volume = (2 / 3) * phi * r * r * r;
let luasPermukaan = 3 * phi * r * r;
console.log(`
Volume         : ${volume.toFixed(2)} cm3
Luas Permukaan : ${luasPermukaan.toFixed(2)} cm2`);