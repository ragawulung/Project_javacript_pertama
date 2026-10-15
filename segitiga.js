const prompt = require("prompt-sync")({ sigint: true });
let alas = Number(prompt("Alas   : "));
let tinggi = Number(prompt("Tinggi : "));
let a = Number(prompt("Sisi a : "));
let b = Number(prompt("Sisi b : "));
let c = Number(prompt("Sisi c : "));
let luas = 0.5 * alas * tinggi;
let keliling = a + b + c;
console.log(`
Luas     : ${luas} cm2
Keliling : ${keliling} cm`);