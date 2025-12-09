
const getPokemons = async function(){

    const url = `./js/data/pokemon.json`;
    // url del recurs (pot ser una petició http/https)
    
    try{
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
            let imatge = "";
            let num = 0;
            let nom = "";
            let tipusArray;
            
            //Bucle per mostrar per consola els pokemons
            data.pokemon.forEach((element, i) => {
                console.log('url-imatge');
                console.log(element.img);
                imatge = element.img;
                console.log('-------------------');
                console.log('Num pokedex');
                console.log(element.num);
                num = element.num;
                console.log('-------------------');
                console.log('Nom Pokemon');
                console.log(element.name);
                nom = element.name;
                console.log('-------------------');
                console.log('Tipus de pokemon')
                tipusArray = element.type;
                tipusArray.forEach((tipus, j)=> {
                    console.log(tipus);
                })
                console.log("============================================");
                console.log("============================================");
                crearPokemon(imatge, num, nom, tipusArray);
            });

            

            
            
        } else {
            console.log("No hi ha cap pokemon");
        }
    }
    catch(error) {
        console.error("Error en obtenir les dades dels pokemons:", error);
      }
      
  
}


getPokemons();


function crearPokemon(imatge, num, nom, tipus) {
    const section = document.getElementById('container-pokemons');
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');
    pokemonCard.innerHTML = `  
        <img class="img-card" src="${imatge}"> 
        <p class="num-pokedex">${num}</p>
        <p class="pokemon-name">${nom}</p>    
        <p class="pokemon-type">${tipus}</p>
    `;
    section.appendChild(pokemonCard);
}