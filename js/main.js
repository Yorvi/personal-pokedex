// class Yorvi {
//   constructor() {
//     this.pokemon = []
//   }
//   add(added){
//     this.pokemon.push(added)
//   }
//   all() {
//     return this.pokemon
//   }
//   get(name) {
//     for (let i = 0; i < this.pokemon.length; i++) {
//       if (name == this.pokemon[i].name) {
//         return this.pokemon[i]
//       }
//     }
//   }
// }





// // I create a class called pokemon and store its id#, name, hp, attack, defense, and abilities to be filled in later.
// class Pokemon {
//   constructor(index, name, hp, attack, defense, abilities) {
//     this.index = index;
//     this.name = name;
//     this.hp = hp;
//     this.attack = attack;
//     this.defense = defense;
//     this.abilities = abilities;
//   }
// }





// // Arcanine axios call
// // Axios gets the source of the info im trying to relay onto my page.
// axios.get("https://pokeapi.co/api/v2/pokemon/59/").then((response) => {

//   // Im grabbing a bunch of tags by an id or class that I want to fill with the info from the API.
//   let data = response.data

//   let index = document.querySelector("#id1")
//   let name = document.querySelector("#name1")
//   let hp = document.querySelector("#hp1")
//   let attack = document.querySelector("#attack1")
//   let defense = document.querySelector("#defense1")
//   let abl1 = document.querySelector(".abl1")
//   let abl2 = document.querySelector(".abl2")
//   let abl3 = document.querySelector(".abl3")
//   let abl4 = document.querySelector(".abl4")

//   // Here I ceate a new pokemon to fill in the info in the class Pokemon with API info.
//   let arcanine = new Pokemon(
//     // Here I write the source of the API information and link it to the position i want it to be displayed, so that it can correlate with the class Pokemon.
//     data.id,
//     data.name,
//     data.stats[5].base_stat,
//     data.stats[4].base_stat,
//     data.stats[3].base_stat,
//     data.abilities[0].ability.name,
//     data.abilities[1].ability.name,
//     data.abilities[2].ability.name,
//     data.moves[7].move.name,
//   )

//   // Here I use the info I linked to the class and use it to display it in the HTML file with the querySelector that I grabbed earlier.
//   index.innerHTML = "#0" + data.id
//   name.innerHTML = data.name
//   hp.innerHTML = "HP: " + data.stats[5].base_stat
//   attack.innerHTML = "ATK: " + data.stats[4].base_stat
//   defense.innerHTML = "DEF: " + data.stats[3].base_stat
//   abl1.innerHTML = data.abilities[0].ability.name
//   abl2.innerHTML = data.abilities[1].ability.name
//   abl3.innerHTML = data.abilities[2].ability.name
//   abl4.innerHTML = data.moves[7].move.name

// }).catch((error) => {
//   console.log(error)
// })





// // Repeat the axios call but for Venusaur
// // Axios gets the source of the info im trying to relay onto my page.
// axios.get("https://pokeapi.co/api/v2/pokemon/3/").then((response) => {

//   // Im grabbing a bunch of tags by an id or class that I want to fill with the info from the API.
//   let data = response.data

//   let index = document.querySelector("#id2")
//   let name = document.querySelector("#name2")
//   let hp = document.querySelector("#hp2")
//   let attack = document.querySelector("#attack2")
//   let defense = document.querySelector("#defense2")
//   let abl1 = document.querySelector(".abl1")
//   let abl2 = document.querySelector(".abl2")
//   let abl3 = document.querySelector(".abl3")
//   let abl4 = document.querySelector(".abl4")

//   // Here I ceate a new pokemon to fill in the info in the class Pokemon with API info.
//   let venusaur = new Pokemon(
//     // Here I use the info I linked to the class and use it to display it in the HTML file with the querySelector that I grabbed earlier.
//     data.id,
//     data.name,
//     data.stats[5].base_stat,
//     data.stats[4].base_stat,
//     data.stats[3].base_stat,
//     data.abilities[0].ability.name,
//     data.abilities[1].ability.name,
//     data.moves[3].move.name,
//     data.moves[19].move.name,
//   )

//   // Here I use the info I linked to the class and use it to display it in the HTML file with the querySelector that I grabbed earlier.
//   index.innerHTML = "#00" + data.id
//   name.innerHTML = data.name
//   hp.innerHTML = "HP: " + data.stats[5].base_stat
//   attack.innerHTML = "ATK: " + data.stats[4].base_stat
//   defense.innerHTML = "DEF: " + data.stats[3].base_stat
//   abl1.innerHTML = data.abilities[0].ability.name
//   abl2.innerHTML = data.abilities[1].ability.name
//   abl3.innerHTML = data.moves[2].move.name
//   abl4.innerHTML = data.moves[19].move.name

// }).catch((error) => {
//   console.log(error)
// })






// // Repeat once more for Starmie
// // Axios gets the source of the info im trying to relay onto my page.
// axios.get("https://pokeapi.co/api/v2/pokemon/121/").then((response) => {

//   // Im grabbing a bunch of tags by an id or class that I want to fill with the info from the API.
//   let data = response.data

//   let index = document.querySelector("#id3")
//   let name = document.querySelector("#name3")
//   let hp = document.querySelector("#hp3")
//   let attack = document.querySelector("#attack3")
//   let defense = document.querySelector("#defense3")
//   let abl1 = document.querySelector(".abl1")
//   let abl2 = document.querySelector(".abl2")
//   let abl3 = document.querySelector(".abl3")
//   let abl4 = document.querySelector(".abl4")

//   // Here I ceate a new pokemon to fill in the info in the class Pokemon with API info.
//   let starmie = new Pokemon(
//     // Here I use the info I linked to the class and use it to display it in the HTML file with the querySelector that I grabbed earlier.		
//     data.id,
//     data.name,
//     data.stats[5].base_stat,
//     data.stats[4].base_stat,
//     data.stats[3].base_stat,
//     data.abilities[0].ability.name,
//     data.abilities[1].ability.name,
//     data.abilities[2].ability.name,
//     data.moves[3].move.name,
//   )

//   // Here I use the info I linked to the class and use it to display it in the HTML file with the querySelector that I grabbed earlier.
//   index.innerHTML = "#" + data.id
//   name.innerHTML = data.name
//   hp.innerHTML = "HP: " + data.stats[5].base_stat
//   attack.innerHTML = "ATK: " + data.stats[4].base_stat
//   defense.innerHTML = "DEF: " + data.stats[3].base_stat
//   abl1.innerHTML = data.abilities[0].ability.name
//   abl2.innerHTML = data.abilities[1].ability.name
//   abl3.innerHTML = data.abilities[2].ability.name
//   abl4.innerHTML = data.moves[3].move.name

// }).catch((error) => {
//   console.log(error)
// })

let input = "";
let button = document.getElementById("button");
let apiUrl = "https://pokeapi.co/api/v2/pokemon/";
let apiUrlReset = "https://pokeapi.co/api/v2/pokemon/";


// Math.floor(feet) + "' " + Math.floor(inch) / 10 + "''"

function capFirstLet(string) {
  string.charAt(0).toUpperCase() + string.slice(1);
  return string
}

// function heightConverter(centimeter) {
//   let inch = 0.3937 * centimeter;
//   let feet = 0.0328 * centimeter;


//   Math.floor(feet) + "' " + Math.floor(inch) / 10 + "''";
// }

function callApi() {
  axios.get(apiUrl).then(response => {
    let data = response.data;
    let pkmnHeight = data.height * 10;
    let inch = 0.3937 * pkmnHeight;
    let feet = 0.0328 * pkmnHeight;
    let pkmnWeight = data.weight * 2.2046;

    let name = document.getElementById("pkmn-name");
    let index = document.getElementById("pkmn-id");
    let pkmnImg = document.getElementById("pkmn-sprite");
    let height = document.getElementById("pkmn-height");
    let weight = document.getElementById("pkmn-weight");
    let types = document.getElementById("pkmn-type");
    let abl1 = document.getElementById("abl1");
    let abl2 = document.getElementById("abl2");
    let abl3 = document.getElementById("abl3");
    let abl4 = document.getElementById("abl4");

    name.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    
    if ( 0 < data.id && data.id < 10 ) {
      index.innerHTML = "#00" + data.id;
    } if ( 9 < data.id && data.id < 100 ) {
      index.innerHTML = "#0" + data.id;
    } if ( 99 < data.id ) {
      index.innerHTML = "#" + data.id;
    };

    pkmnImg.innerHTML =
      "<img src='" + data.sprites.front_default + "' id='pkmn-img'>";
      
    height.innerHTML = "Height: " + Math.floor(feet) + "ft " + Math.floor(Math.floor(inch) / 10) + "in";

    weight.innerHTML = "Weight: " + Math.floor(pkmnWeight) / 10 + " lbs";

    types.innerHTML =
      "Type: " +
      data.types[0].type.name.charAt(0).toUpperCase() +
      data.types[0].type.name.slice(1);

    abl1.innerHTML =
      data.moves[3].move.name.charAt(0).toUpperCase() +
      data.moves[3].move.name.slice(1);
    abl2.innerHTML =
      data.moves[2].move.name.charAt(0).toUpperCase() +
      data.moves[2].move.name.slice(1);
    abl3.innerHTML =
      data.moves[7].move.name.charAt(0).toUpperCase() +
      data.moves[7].move.name.slice(1);
    abl4.innerHTML =
      data.moves[6].move.name.charAt(0).toUpperCase() +
      data.moves[6].move.name.slice(1);
  }).catch(error => {
    console.log(error);
  });
}

button.addEventListener("click", () => {
  input = document.getElementById("search-input").value;
  apiUrl = apiUrl + input;
  callApi();
  apiUrl = apiUrlReset;
});
