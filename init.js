const baseURL = "https://pokeapi.co/api/v2/pokemon/"
const baseImgURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
const pokemones = [4, 6, 12, 25, 40]

document.addEventListener("DOMContentLoaded", function(e){
    
    // getPokemones()

    // function showPokemones(pokeName, pokeAbility, pokeHeight, pokeWeight, pokeImgURL){
    //     let pepito = "";
     
    //     pepito += `			
    //         <div class="table-row">		
    //             <div class="table-data" >`+ pokeName +`</div>
    //             <div class="table-data" >${pokeAbility}</div>
    //             <div class="table-data" >`+ pokeHeight +`</div>
    //             <div class="table-data" >${pokeWeight}</div>
    //             <div class="table-data"><img src=${pokeImgURL} id="img"></div>
    //         </div>
    //     `
    //     document.getElementById("id-el-que-quieres").innerHTML += pepito;
    // }

    // function getPokemones(){
    
    //     for(let i = 0; i < pokemones.length; i ++){
    //         let poke = pokemones[i];
    //         let pokeURL = baseURL+poke;
    //         let pokeImgURL = baseImgURL+poke+".png";
     
    //         fetch(pokeURL)
    //             .then(result => result.json())
    //             .then(data => {
    //                  let ability = data.abilities[0].ability.name;
    //                  let height = data.height;
    //                  let weight = data.weight;
    //                  let name = data.name;

    //                  showPokemones(name, ability, height, weight, pokeImgURL)
    //         })
    //     }
    // }

    //*******************************************************

    //Opcion B

    var pokemon = getPokemon()
    console.log(pokemon)
    showPokemones(pokemon)

    function showPokemones(datosPokemon){
      
        let pepito = ''
        pepito += `            
            <div class="table-row">        
                <div class="table-data" >`+ datosPokemon[0] +`</div>
                <div class="table-data" >${datosPokemon[1]}</div>
                <div class="table-data" >`+ datosPokemon[2] +`</div>
                <div class="table-data" >${datosPokemon[3]}</div>
                </div>
            </div>
        `
        document.getElementById("id-el-que-quieres").innerHTML += pepito;
    }

    function getPokemon(){
        let pokemon = []
        fetch(baseURL+4)
            .then(result => result.json())
            .then(data => { 
                let name = data.name
                let ability = data.abilities[0].ability.name
                let height = data.height
                let weight = data.weight

                pokemon = [name,ability,height,weight]

                // Otra forma de cargar pokemon:
                // let pokemon = []
                // pokemon.push(name)
                // pokemon.push(ability)
                // pokemon.push(height)
                // pokemon.push(weight)

                return pokemon

            })
       
    }








   
});

