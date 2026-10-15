const prompt = require("prompt-sync")({ sigint: true });
let alasSegitiga = Number(prompt("Alas segitiga alas    : "));
let tinggiSegitiga = Number(prompt("Tinggi segitiga alas  : "));
let kelilingAlas = Number(prompt("Keliling segitiga alas: "));
let tinggiPrisma = Number(prompt("Tinggi prisma         : "));
let luasAlas = 0.5 * alasSegitiga * tinggiSegitiga;
let volume = luasAlas * tinggiPrisma;
let luasPermukaan = (2 * luasAlas) + (kelilingAlas * tinggiPrisma);
console.log(`
Volume         : ${volume} cm3
Luas Permukaan : ${luasPermukaan} cm2`);