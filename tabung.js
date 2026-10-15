const prompt = require("prompt-sync")({ sigint: true });
let r = Number(prompt("Jari-jari : "));
let t = Number(prompt("Tinggi    : "));
let phi = Math.PI;
let volume = phi * r * r * t;
let luasPermukaan = 2 * phi * r * (r + t);
console.log(`
Volume         : ${volume.toFixed(2)} cm3
Luas Permukaan : ${luasPermukaan.toFixed(2)} cm2`);