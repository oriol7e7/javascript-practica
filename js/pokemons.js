

const getPokemons = async function () {

    const url = `./js/data/pokemon.json`;
    // url del recurs (pot ser una petició http/https)

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        if (data) {
            // Si entra a aqui vol dir que ha pogut carregar tota la informació,
            // verifiqueu que veieu les dades per consola abans de fer res 
            console.log(data);

            //TODO
            //Heu d'implantar i accedir als valors del JSON a partir d'aqui
            //Podeu també fer crida a funcions externes passant les dades 
            // del json o executar tot el codi directament a aquí dintre
            //Crear variables per a guardar els valors de l'array


            crearInput();
            printPokemons(data.pokemon);

            const reverseButton = document.getElementById('filterButton');
            reverseButton.addEventListener('click', ()=> {
                printPokemons(data.pokemon, true)
            })

            const input = document.getElementById('searchPokemon');

            input.addEventListener('input', function (event) {
                let pokemonBuscat = input.value;

                console.log("Pokemon Buscat:", pokemonBuscat);
                if (pokemonBuscat.trim() == "") {
                    console.log("Entra 1")
                    printPokemons(data.pokemon);
                } else {
                    console.log("Entra 2")
                    // SI BUSCA ALGO BUIDA LA SECTION Y CREA CARDS RECORRENT EL JSON I CREANT LES CARDS SI EL NOM DEL POKEMON ES SEMBLANT AL POKEMON BUSCAT
                    printSearchedPokemon(data.pokemon, pokemonBuscat);
                }

            })
        } else {
            console.log("No hi ha cap pokemon");
        }
    }
    catch (error) {
        console.error("Error en obtenir les dades dels pokemons:", error);
    }
}

function crearPokemon(imatge, num, nom, tipus) {
    console.log("NOMBRE: " + nom)
    const section = document.getElementById('container-pokemons');
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');
    pokemonCard.innerHTML = `  
        <img class="img-card" src="${imatge}"> 
        <p class="num-pokedex">${num}</p>
        <p class="pokemon-name">${nom}</p>    
        <p class="pokemon-type">${tipus.join(', ')}</p>
    `;
    section.appendChild(pokemonCard);
}

function crearInput() {
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    if (header) {
        header.innerHTML = `
            <label for="searchPokemon">Busca un Pokemon</label>
            <input type="text" name="searchPokemon" id="searchPokemon" placeholder="Posa un nom, num o tipus...">
        `;
    } else {
        const createHeader = document.createElement('header');
        createHeader.innerHTML = `
            <label for="searchPokemon">Busca un Pokemon</label>
            <input type="text" name="searchPokemon" id="searchPokemon" placeholder="Posa un nom, num o tipus...">
            <div class="buttons">
            <button id="filterButton" class="filterButton">▲▼</button>
            </div>
        `;

        body.prepend(createHeader);
    }
}

function printPokemons(dataPokemon, reverse) {
    const section = document.getElementById('container-pokemons');
    section.innerHTML = "";

    if (reverse) {
        dataPokemon.reverse();
        dataPokemon.forEach((element, i) => {
            let img = element.img;
            let num = element.num;
            let nom = element.name;
            let type = element.type;
            crearPokemon(img, num, nom, type)
        })
    } else {
        dataPokemon.forEach((element, i) => {
            let img = element.img;
            let num = element.num;
            let nom = element.name;
            let type = element.type;
            crearPokemon(img, num, nom, type)
        })
    }

}

function printSearchedPokemon(dataPokemon, pokemonBuscat) {
    const section = document.getElementById('container-pokemons');
    section.innerHTML = "";

    dataPokemon.forEach((element, i) => {
        if (element.name.toLowerCase().includes(pokemonBuscat.toLowerCase()) || element.num.toLowerCase().includes(pokemonBuscat.toLowerCase()) || element.type.join(' ').toLowerCase().includes(pokemonBuscat.toLowerCase())) {
            let imatge = element.img;
            let num = element.num;
            let nom = element.name;
            let tipusArray = element.type;
            crearPokemon(imatge, num, nom, tipusArray);
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    getPokemons();
});