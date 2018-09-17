let input = "";
let button = document.getElementById("button");
let apiUrl = "https://pokeapi.co/api/v2/pokemon/";
let apiUrlReset = "https://pokeapi.co/api/v2/pokemon/";


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
