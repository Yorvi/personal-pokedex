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

var search = "";

function storeVal() {
  search = document.getElementById("search-input").value;

  if ( isNaN(search) == false) {
    if ( 0 < search && search < 10 ) {
      console.log( "#00" + search );
    }
    if ( 9 < search && search < 100 ) {
      console.log( "#0" + search );
    }
    if ( 99 < search) {
      console.log( "#" + search );
    }
  } else {
    console.log(search);
  }
}

