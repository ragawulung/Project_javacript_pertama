const prompt = require("prompt-sync")({ sigint: true });
let s = Number(prompt("Sisi alas (persegi)   : "));
let tinggiLimas = Number(prompt("Tinggi limas          : "));
let tinggiSisi = Number(prompt("Tinggi sisi (miring)  : "));
let luasAlas = s * s;
let volume = (1 / 3) * luasAlas * tinggiLimas;
let luasSisiTegak = 4 * (0.5 * s * tinggiSisi);
let luasPermukaan = luasAlas + luasSisiTegak;
console.log(`
Volume         : ${volume.toFixed(2)} cm3
Luas Permukaan : ${luasPermukaan} cm2`);