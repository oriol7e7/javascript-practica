const TIPUS_IVA = 21
let nom = "cotxe";
let preu = 100;
let unitats = 4;
let baseImposable = 0;
baseImposable = preu * unitats;
baseImposable = preu + (preu * TIPUS_IVA / 100);

console.log(TIPUS_IVA);
console.log(nom);
console.log(preu);
console.log(unitats);
console.log(baseImposable);

let preuMajor = true;
if (producte.preuTotal > 100) {
    preuMajor = true;
} else {
    preuMajor = false;
}

if (preuMajor) {
    console.log("Preu major a 100");
}

