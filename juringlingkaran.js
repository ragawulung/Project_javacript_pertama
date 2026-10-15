const prompt = require("prompt-sync")({ sigint: true });
let r = Number(prompt("Jari-jari      : "));
let sudut = Number(prompt("Sudut (derajat): "));
let phi = Math.PI;
let luas = (sudut / 360) * phi * r * r;
let panjangBusur = (sudut / 360) * 2 * phi * r;
console.log(`
Luas Juring     : ${luas.toFixed(2)} cm2
Panjang Busur   : ${panjangBusur.toFixed(2)} cm`);