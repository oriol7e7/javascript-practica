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

let arrayComandes = [comanda1, comanda2, comanda3]

console.log(arrayComandes)



arrayComandes.forEach((objecte, i) => {
        const tr = document.createElement('tr');
        tr.id = `fila-${i+1}`;
        document.getElementById('tbody').appendChild(tr);
        const filaActual = document.getElementById(`fila-${i+1}`);
        console.log("fila:", filaActual)
        const td = document.createElement('td');    
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        td.innerText = objecte.nom;
        td2.innerText = objecte.preu
        td3.innerText = objecte.unitats
        td4.innerText = objecte.baseImposable
        td5.innerText = objecte.preuTotal
        td.id = `celda-${i}`;
        filaActual.appendChild(td);
        filaActual.appendChild(td2);
        filaActual.appendChild(td3);
        filaActual.appendChild(td4);
        filaActual.appendChild(td5);     
});