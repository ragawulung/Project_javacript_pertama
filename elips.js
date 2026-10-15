const prompt = require("prompt-sync")({ sigint: true });
let a = Number(prompt("Sumbu semi panjang (a) : "));
let b = Number(prompt("Sumbu semi pendek (b)  : "));
let phi = Math.PI;
let luas = phi * a * b;
// pendekatan Ramanujan untuk keliling elips
let keliling = phi * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)));
console.log(`
Luas     : ${luas.toFixed(2)} cm2
Keliling : ${keliling.toFixed(2)} cm (pendekatan)`);