document.getElementById("arcaninePic").addEventListener('mouseover', function() {
	document.getElementById("arcaninePic").src = "images/shiny-arcanine.jpg"
});

let ul = document.querySelector("ul")

class Pokemon {
	constructor(index, pokemon, hp, attack, defense, abilities) {
		this.index = index;
		this.name = name;
		this.hp = hp;
		this.attack = attack;
		this.defense = defense;
		this.abilities = abilities;
	}
}

axios.get("https://pokeapi.co/api/v2/pokemon/59/")
.then((response) => {
	let data = response.data
	let section = document.querySelector("#pokeInfo1")
	let index = document.querySelector("#id1")
	let name = document.querySelector("#name1")
	let hp = document.querySelector("#hp1")
	let attack = document.querySelector("#attack1")
	let defense = document.querySelector("#defense1")
	let abl1 = document.querySelector(".abl1")
	let abl2 = document.querySelector(".abl2")
	let abl3 = document.querySelector(".abl3")
	let abl4 = document.querySelector(".abl4")

	let arcanine = new Pokemon (
		data.id,
		data.name,
		data.stats[5].base_stat,
		data.stats[4].base_stat,
		data.stats[3].base_stat,
		data.abilities[0].ability.name,
		data.abilities[1].ability.name,
		data.abilities[2].ability.name,
		data.moves[7].move.name,
	)
	index.innerHTML = "#0" + data.id
	name.innerHTML = data.name
	hp.innerHTML = "HP: " + data.stats[5].base_stat
	attack.innerHTML = "ATK: " + data.stats[4].base_stat
	defense.innerHTML = "DEF: " + data.stats[3].base_stat
	abl1.innerHTML = data.abilities[0].ability.name
	abl2.innerHTML = data.abilities[1].ability.name
	abl3.innerHTML = data.abilities[2].ability.name
	abl4.innerHTML = data.moves[7].move.name

})
.catch((error) => {
  console.log(error)
})