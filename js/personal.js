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
    height.innerHTML = "<small>HT</small> " + Math.floor(feet / 1.5) + "' " + Math.floor(Math.floor(inch) / 20) + "\"";
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

axios.get("https://raw.githubusercontent.com/Yorvi/api-data/master/data/api/v2/pokemon/65/index.json").then(response => {
    let data = response.data;

    let id = document.getElementById("ala-id");
    let name = document.getElementById("ala-nm");
    let hp = document.getElementById("ala-hp");
    let pkmnHeight = data.height * 20;
    let inch = 0.3937 * pkmnHeight;
    let feet = 0.0328 * pkmnHeight;
    let height = document.getElementById("ala-ht");
    let pkmnWeight = data.weight * 2.2046;
    let weight = document.getElementById("ala-wt");
    let abl1 = document.getElementById("ala-abl1");
    let abl2 = document.getElementById("ala-abl2");
    let abl3 = document.getElementById("ala-abl3");
    let abl4 = document.getElementById("ala-abl4");
    let atk = document.getElementById("ala-atk");
    let def = document.getElementById("ala-def");

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
    name.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1) + "<small>LV. </small>52";
    hp.innerHTML = "<small>HP </small>" + data.stats[5].base_stat;
    height.innerHTML = "<small>HT</small> " + Math.floor(feet / 1.5) + "' " + Math.floor(Math.floor(inch) / 20) + "\"";
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

axios.get("https://raw.githubusercontent.com/Yorvi/api-data/master/data/api/v2/pokemon/143/index.json").then(response => {
    let data = response.data;

    let id = document.getElementById("snor-id");
    let name = document.getElementById("snor-nm");
    let hp = document.getElementById("snor-hp");
    let pkmnHeight = data.height * 20;
    let inch = 0.3937 * pkmnHeight;
    let feet = 0.0328 * pkmnHeight;
    let height = document.getElementById("snor-ht");
    let pkmnWeight = data.weight * 2.2046;
    let weight = document.getElementById("snor-wt");
    let abl1 = document.getElementById("snor-abl1");
    let abl2 = document.getElementById("snor-abl2");
    let abl3 = document.getElementById("snor-abl3");
    let abl4 = document.getElementById("snor-abl4");
    let atk = document.getElementById("snor-atk");
    let def = document.getElementById("snor-def");

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

    id.innerHTML = "<small>NO. </small>" + data.id;
    name.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1) + "<small>LV. </small>42";
    hp.innerHTML = "<small>HP </small>" + data.stats[5].base_stat;
    height.innerHTML = "<small>HT</small> " + Math.floor(feet / 1.5) + "' " + Math.floor(Math.floor(inch) / 20) + "\"";
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

axios.get("https://raw.githubusercontent.com/Yorvi/api-data/master/data/api/v2/pokemon/145/index.json").then(response => {
    let data = response.data;

    let id = document.getElementById("zap-id");
    let name = document.getElementById("zap-nm");
    let hp = document.getElementById("zap-hp");
    let pkmnHeight = data.height * 20;
    let inch = 0.3937 * pkmnHeight;
    let feet = 0.0328 * pkmnHeight;
    let height = document.getElementById("zap-ht");
    let pkmnWeight = data.weight * 2.2046;
    let weight = document.getElementById("zap-wt");
    let abl1 = document.getElementById("zap-abl1");
    let abl2 = document.getElementById("zap-abl2");
    let abl3 = document.getElementById("zap-abl3");
    let abl4 = document.getElementById("zap-abl4");
    let atk = document.getElementById("zap-atk");
    let def = document.getElementById("zap-def");

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
    name.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1) + "<small>LV. </small>64";
    hp.innerHTML = "<small>HP </small>" + data.stats[5].base_stat;
    height.innerHTML = "<small>HT</small> " + Math.floor(feet / 1.5) + "' " + Math.floor(Math.floor(inch) / 20) + "\"";
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
    "https://raw.githubusercontent.com/Yorvi/api-data/master/data/api/v2/pokemon/149/index.json"
  )
  .then(response => {
    let data = response.data;

    let id = document.getElementById("dragon-id");
    let name = document.getElementById("dragon-nm");
    let hp = document.getElementById("dragon-hp");
    let pkmnHeight = data.height * 20;
    let inch = 0.3937 * pkmnHeight;
    let feet = 0.0328 * pkmnHeight;
    let height = document.getElementById("dragon-ht");
    let pkmnWeight = data.weight * 2.2046;
    let weight = document.getElementById("dragon-wt");
    let abl1 = document.getElementById("dragon-abl1");
    let abl2 = document.getElementById("dragon-abl2");
    let abl3 = document.getElementById("dragon-abl3");
    let abl4 = document.getElementById("dragon-abl4");
    let atk = document.getElementById("dragon-atk");
    let def = document.getElementById("dragon-def");

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
    name.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1) + "<small>LV. </small>67";
    hp.innerHTML = "<small>HP </small>" + data.stats[5].base_stat;
    height.innerHTML = "<small>HT</small> " + Math.floor(feet / 1.5) + "' " + Math.floor(Math.floor(inch) / 20) + "\"";
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
    "https://raw.githubusercontent.com/Yorvi/api-data/master/data/api/v2/pokemon/3/index.json"
  )
  .then(response => {
    let data = response.data;

    let id = document.getElementById("venu-id");
    let name = document.getElementById("venu-nm");
    let hp = document.getElementById("venu-hp");
    let pkmnHeight = data.height * 20;
    let inch = 0.3937 * pkmnHeight;
    let feet = 0.0328 * pkmnHeight;
    let height = document.getElementById("venu-ht");
    let pkmnWeight = data.weight * 2.2046;
    let weight = document.getElementById("venu-wt");
    let abl1 = document.getElementById("venu-abl1");
    let abl2 = document.getElementById("venu-abl2");
    let abl3 = document.getElementById("venu-abl3");
    let abl4 = document.getElementById("venu-abl4");
    let atk = document.getElementById("venu-atk");
    let def = document.getElementById("venu-def");

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
    name.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1) + "<small>LV. </small>80";
    hp.innerHTML = "<small>HP </small>" + data.stats[5].base_stat;
    height.innerHTML = "<small>HT</small> " + Math.floor(feet / 1.5) + "' " + Math.floor(Math.floor(inch) / 20) + "\"";
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
