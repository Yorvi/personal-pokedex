class Yorvi {
  constructor() {
    this.pokemon = []
  }
  add(added){
    this.pokemon.push(added)
  }
  all() {
    return this.pokemon
  }
  get(name) {
    for (let i = 0; i < this.pokemon.length; i++) {
      if (name == this.pokemon[i].name) {
        return this.pokemon[i]
      }
    }
  }
}

// I create a class called pokemon and store its id#, name, hp, attack, defense, and abilities to be filled in later.
class Pokemon {
  constructor(index, name, hp, attack, defense, abilities) {
    this.index = index;
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
  }
}

axios.get("https://raw.githubusercontent.com/Yorvi/api-data/master/data/api/v2/pokemon/59/index.json").then(response => {
    let data = response.data;

    let id = document.getElementById("arc-id");
    let name = document.getElementById("arc-nm");
    let hp = document.getElementById("arc-hp");
    let pkmnHeight = data.height * 20;
    let inch = 0.3937 * pkmnHeight;
    let feet = 0.0328 * pkmnHeight;
    let height = document.getElementById("arc-ht");
    let pkmnWeight = data.weight * 2.2046;
    let weight = document.getElementById("arc-wt");
    let abl1 = document.getElementById("arc-abl1");
    let abl2 = document.getElementById("arc-abl2");
    let abl3 = document.getElementById("arc-abl3");
    let abl4 = document.getElementById("arc-abl4");
    let atk = document.getElementById("arc-atk");
    let def = document.getElementById("arc-def");

    let pkmnImg = document.getElementById("my-pkmn1");

    let arcanine = new Pokemon(
      data.id,
      data.name,
      data.stats[5].base_stat,
      data.stats[4].base_stat,
      data.stats[3].base_stat,

      data.moves[0].move.name,
      data.moves[1].move.name,
      data.moves[2].move.name,
      data.moves[7].move.name
    );

    id.innerHTML = "<small>NO. </small>0" + data.id;
    name.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1) + "<small>LV. </small>45";
    hp.innerHTML = "<small>HP </small>" + data.stats[5].base_stat;
    height.innerHTML = "<small>HT</small> " + Math.floor(feet / 1.5) + "' " + Math.floor(Math.floor(inch) / 20) + '"';
    weight.innerHTML = "<small>WT</small> " + Math.floor(Math.floor(pkmnWeight) / 10) + " lbs.";
    abl1.innerHTML = data.moves[10].move.name.charAt(0).toUpperCase() + data.moves[10].move.name.slice(1);
    abl2.innerHTML = data.moves[5].move.name.charAt(0).toUpperCase() + data.moves[5].move.name.slice(1);
    abl3.innerHTML = data.moves[7].move.name.charAt(0).toUpperCase() + data.moves[7].move.name.slice(1);
    abl4.innerHTML = data.moves[18].move.name.charAt(0).toUpperCase() + data.moves[18].move.name.slice(1);
    atk.innerHTML = "ATK <span>" + data.stats[4].base_stat + "</span>";
    def.innerHTML = "DEF <span>" + data.stats[3].base_stat + "</span>"; 

    pkmnImg.innerHTML = "<img src='" + data.sprites.front_default + "' >";
  })
  .catch(error => {
    console.log(error);
  });

axios
  .get(
    "https://raw.githubusercontent.com/Yorvi/api-data/master/data/api/v2/pokemon/65/index.json"
  )
  .then(response => {
    let data = response.data;

    let id = document.getElementById("");
    let name = document.getElementById("");
    let hp = document.getElementById("");
    let height = document.getElementById("");
    let weight = document.getElementById("");
    let abl1 = document.getElementById("");
    let abl2 = document.getElementById("");
    let abl3 = document.getElementById("");
    let abl4 = document.getElementById("");
    let atk = document.getElementById("");
    let def = document.getElementById("");

    let pkmnImg = document.getElementById("my-pkmn2");

    let alakazam = new Pokemon(
      data.id,
      data.name,
      data.stats[5].base_stat,
      data.stats[4].base_stat,
      data.stats[3].base_stat,

      data.moves[0].move.name,
      data.moves[1].move.name,
      data.moves[2].move.name,
      data.moves[7].move.name
    );

    id.innerHTML = "<small>NO. </small>0" + data.id;
    name.innerHTML = data.name
        .charAt(0)
        .toUpperCase() + data.name.slice(1) + "<small>LV. </small>45";
    hp.innerHTML = "<small>HP </small>" + data.stats[5].base_stat;
    height.innerHTML = "<small>HT</small> " + Math.floor(feet / 1.5) + "' " + Math.floor(Math.floor(inch) / 20) + '"';
    weight.innerHTML = "<small>WT</small> " + Math.floor(Math.floor(pkmnWeight) / 10) + " lbs.";
    abl1.innerHTML = data.moves[10].move.name
        .charAt(0)
        .toUpperCase() + data.moves[10].move.name.slice(1);
    abl2.innerHTML = data.moves[5].move.name
        .charAt(0)
        .toUpperCase() + data.moves[5].move.name.slice(1);
    abl3.innerHTML = data.moves[7].move.name
        .charAt(0)
        .toUpperCase() + data.moves[7].move.name.slice(1);
    abl4.innerHTML = data.moves[18].move.name
        .charAt(0)
        .toUpperCase() + data.moves[18].move.name.slice(1);
    atk.innerHTML = "ATK <span>" + data.stats[4].base_stat + "</span>";
    def.innerHTML = "DEF <span>" + data.stats[3].base_stat + "</span>"; 

    pkmnImg.innerHTML = "<img src='" + data.sprites.front_default + "' >";
  })
  .catch(error => {
    console.log(error);
  });

axios
  .get(
    "https://raw.githubusercontent.com/Yorvi/api-data/master/data/api/v2/pokemon/143/index.json"
  )
  .then(response => {
    let data = response.data;

    let id = document.getElementById("");
    let name = document.getElementById("");
    let hp = document.getElementById("");
    let height = document.getElementById("");
    let weight = document.getElementById("");
    let abl1 = document.getElementById("");
    let abl2 = document.getElementById("");
    let abl3 = document.getElementById("");
    let abl4 = document.getElementById("");
    let atk = document.getElementById("");
    let def = document.getElementById("");

    let pkmnImg = document.getElementById("my-pkmn3");

    let snorlax = new Pokemon(
      data.id,
      data.name,
      data.stats[5].base_stat,
      data.stats[4].base_stat,
      data.stats[3].base_stat,

      data.moves[0].move.name,
      data.moves[1].move.name,
      data.moves[2].move.name,
      data.moves[7].move.name
    );

    id.innerHTML = "<small>NO. </small>0" + data.id;
    name.innerHTML = data.name
        .charAt(0)
        .toUpperCase() + data.name.slice(1) + "<small>LV. </small>45";
    hp.innerHTML = "<small>HP </small>" + data.stats[5].base_stat;
    height.innerHTML = "<small>HT</small> " + Math.floor(feet / 1.5) + "' " + Math.floor(Math.floor(inch) / 20) + '"';
    weight.innerHTML = "<small>WT</small> " + Math.floor(Math.floor(pkmnWeight) / 10) + " lbs.";
    abl1.innerHTML = data.moves[10].move.name
        .charAt(0)
        .toUpperCase() + data.moves[10].move.name.slice(1);
    abl2.innerHTML = data.moves[5].move.name
        .charAt(0)
        .toUpperCase() + data.moves[5].move.name.slice(1);
    abl3.innerHTML = data.moves[7].move.name
        .charAt(0)
        .toUpperCase() + data.moves[7].move.name.slice(1);
    abl4.innerHTML = data.moves[18].move.name
        .charAt(0)
        .toUpperCase() + data.moves[18].move.name.slice(1);
    atk.innerHTML = "ATK <span>" + data.stats[4].base_stat + "</span>";
    def.innerHTML = "DEF <span>" + data.stats[3].base_stat + "</span>"; 

    pkmnImg.innerHTML = "<img src='" + data.sprites.front_default + "' >";
  })
  .catch(error => {
    console.log(error);
  });

axios
  .get(
    "https://raw.githubusercontent.com/Yorvi/api-data/master/data/api/v2/pokemon/145/index.json"
  )
  .then(response => {
    let data = response.data;

    let id = document.getElementById("");
    let name = document.getElementById("");
    let hp = document.getElementById("");
    let height = document.getElementById("");
    let weight = document.getElementById("");
    let abl1 = document.getElementById("");
    let abl2 = document.getElementById("");
    let abl3 = document.getElementById("");
    let abl4 = document.getElementById("");
    let atk = document.getElementById("");
    let def = document.getElementById("");

    let pkmnImg = document.getElementById("my-pkmn4");

    let zapdos = new Pokemon(
      data.id,
      data.name,
      data.stats[5].base_stat,
      data.stats[4].base_stat,
      data.stats[3].base_stat,

      data.moves[0].move.name,
      data.moves[1].move.name,
      data.moves[2].move.name,
      data.moves[7].move.name
    );

    id.innerHTML = "<small>NO. </small>0" + data.id;
    name.innerHTML = data.name
        .charAt(0)
        .toUpperCase() + data.name.slice(1) + "<small>LV. </small>45";
    hp.innerHTML = "<small>HP </small>" + data.stats[5].base_stat;
    height.innerHTML = "<small>HT</small> " + Math.floor(feet / 1.5) + "' " + Math.floor(Math.floor(inch) / 20) + '"';
    weight.innerHTML = "<small>WT</small> " + Math.floor(Math.floor(pkmnWeight) / 10) + " lbs.";
    abl1.innerHTML = data.moves[10].move.name
        .charAt(0)
        .toUpperCase() + data.moves[10].move.name.slice(1);
    abl2.innerHTML = data.moves[5].move.name
        .charAt(0)
        .toUpperCase() + data.moves[5].move.name.slice(1);
    abl3.innerHTML = data.moves[7].move.name
        .charAt(0)
        .toUpperCase() + data.moves[7].move.name.slice(1);
    abl4.innerHTML = data.moves[18].move.name
        .charAt(0)
        .toUpperCase() + data.moves[18].move.name.slice(1);
    atk.innerHTML = "ATK <span>" + data.stats[4].base_stat + "</span>";
    def.innerHTML = "DEF <span>" + data.stats[3].base_stat + "</span>"; 

    pkmnImg.innerHTML = "<img src='" + data.sprites.front_default + "' >";
  })
  .catch(error => {
    console.log(error);
  });

axios
  .get(
    "https://raw.githubusercontent.com/Yorvi/api-data/master/data/api/v2/pokemon/149/index.json"
  )
  .then(response => {
    let data = response.data;

    let id = document.getElementById("");
    let name = document.getElementById("");
    let hp = document.getElementById("");
    let height = document.getElementById("");
    let weight = document.getElementById("");
    let abl1 = document.getElementById("");
    let abl2 = document.getElementById("");
    let abl3 = document.getElementById("");
    let abl4 = document.getElementById("");
    let atk = document.getElementById("");
    let def = document.getElementById("");

    let pkmnImg = document.getElementById("my-pkmn5");

    let dragonite = new Pokemon(
      data.id,
      data.name,
      data.stats[5].base_stat,
      data.stats[4].base_stat,
      data.stats[3].base_stat,

      data.moves[0].move.name,
      data.moves[1].move.name,
      data.moves[2].move.name,
      data.moves[7].move.name
    );

    id.innerHTML = "<small>NO. </small>0" + data.id;
    name.innerHTML = data.name
        .charAt(0)
        .toUpperCase() + data.name.slice(1) + "<small>LV. </small>45";
    hp.innerHTML = "<small>HP </small>" + data.stats[5].base_stat;
    height.innerHTML = "<small>HT</small> " + Math.floor(feet / 1.5) + "' " + Math.floor(Math.floor(inch) / 20) + '"';
    weight.innerHTML = "<small>WT</small> " + Math.floor(Math.floor(pkmnWeight) / 10) + " lbs.";
    abl1.innerHTML = data.moves[10].move.name
        .charAt(0)
        .toUpperCase() + data.moves[10].move.name.slice(1);
    abl2.innerHTML = data.moves[5].move.name
        .charAt(0)
        .toUpperCase() + data.moves[5].move.name.slice(1);
    abl3.innerHTML = data.moves[7].move.name
        .charAt(0)
        .toUpperCase() + data.moves[7].move.name.slice(1);
    abl4.innerHTML = data.moves[18].move.name
        .charAt(0)
        .toUpperCase() + data.moves[18].move.name.slice(1);
    atk.innerHTML = "ATK <span>" + data.stats[4].base_stat + "</span>";
    def.innerHTML = "DEF <span>" + data.stats[3].base_stat + "</span>"; 

    pkmnImg.innerHTML = "<img src='" + data.sprites.front_default + "' >";
  })
  .catch(error => {
    console.log(error);
  });

axios
  .get(
    "https://raw.githubusercontent.com/Yorvi/api-data/master/data/api/v2/pokemon/3/index.json"
  )
  .then(response => {
    let data = response.data;

    let id = document.getElementById("");
    let name = document.getElementById("");
    let hp = document.getElementById("");
    let height = document.getElementById("");
    let weight = document.getElementById("");
    let abl1 = document.getElementById("");
    let abl2 = document.getElementById("");
    let abl3 = document.getElementById("");
    let abl4 = document.getElementById("");
    let atk = document.getElementById("");
    let def = document.getElementById("");

    let pkmnImg = document.getElementById("my-pkmn6");

    let venusaur = new Pokemon(
      data.id,
      data.name,
      data.stats[5].base_stat,
      data.stats[4].base_stat,
      data.stats[3].base_stat,

      data.moves[0].move.name,
      data.moves[1].move.name,
      data.moves[2].move.name,
      data.moves[7].move.name
    );

    id.innerHTML = "<small>NO. </small>0" + data.id;
    name.innerHTML = data.name
        .charAt(0)
        .toUpperCase() + data.name.slice(1) + "<small>LV. </small>45";
    hp.innerHTML = "<small>HP </small>" + data.stats[5].base_stat;
    height.innerHTML = "<small>HT</small> " + Math.floor(feet / 1.5) + "' " + Math.floor(Math.floor(inch) / 20) + '"';
    weight.innerHTML = "<small>WT</small> " + Math.floor(Math.floor(pkmnWeight) / 10) + " lbs.";
    abl1.innerHTML = data.moves[10].move.name
        .charAt(0)
        .toUpperCase() + data.moves[10].move.name.slice(1);
    abl2.innerHTML = data.moves[5].move.name
        .charAt(0)
        .toUpperCase() + data.moves[5].move.name.slice(1);
    abl3.innerHTML = data.moves[7].move.name
        .charAt(0)
        .toUpperCase() + data.moves[7].move.name.slice(1);
    abl4.innerHTML = data.moves[18].move.name
        .charAt(0)
        .toUpperCase() + data.moves[18].move.name.slice(1);
    atk.innerHTML = "ATK <span>" + data.stats[4].base_stat + "</span>";
    def.innerHTML = "DEF <span>" + data.stats[3].base_stat + "</span>"; 

    pkmnImg.innerHTML = "<img src='" + data.sprites.front_default + "' >";
  })
  .catch(error => {
    console.log(error);
  });


function flipCard1() {
  let card = document.getElementById("card1");

  card.classList.toggle("flip");
}

function flipCard2() {
  let card = document.getElementById("card2");

  card.classList.toggle("flip");
}

function flipCard3() {
  let card = document.getElementById("card3");

  card.classList.toggle("flip");
}

function flipCard4() {
  let card = document.getElementById("card4");

  card.classList.toggle("flip");
}

function flipCard5() {
  let card = document.getElementById("card5");

  card.classList.toggle("flip");
}

function flipCard6() {
  let card = document.getElementById("card6");

  card.classList.toggle("flip");
}








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
