const prompt = require("prompt-sync")({ sigint: true });
console.log("====================");
console.log("KALKULATOR KERUCUT");
console.log("====================");
let r = Number(prompt("Jari-jari         : "));
let t = Number(prompt("Tinggi            : "));
let s = Number(prompt("Garis pelukis (s) : "));
let phi = Math.PI;
let volume = (1 / 3) * phi * r * r * t;
let luasPermukaan = phi * r * (r + s);
console.log(`
Volume         : ${volume.toFixed(2)} cm3
Luas Permukaan : ${luasPermukaan.toFixed(2)} cm2`);