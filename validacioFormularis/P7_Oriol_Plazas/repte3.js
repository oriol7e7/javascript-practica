function crearComanda(nomP, preuP, unitatsP) {
    let baseImposableP = preuP * unitatsP
    let preuTotalP = preuP + (preuP * 21 / 100)
    return {
        nom: nomP,
        preu: preuP,
        unitats: unitatsP,
        baseImposable: baseImposableP,
        preuTotal: preuTotalP
    }
}

let comanda1 = crearComanda("cotxe", 199, 3);
let comanda2 = crearComanda("rodes", 69, 2);
let comanda3 = crearComanda("frenos", 55, 10);

let array = [comanda1, comanda2, comanda3]

console.log(array)