document.getElementById("electabuzzPic").addEventListener('mouseover', function() {
	document.getElementById("electabuzzPic").src = "images/shiny-electabuzz.jpg"
})

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

axios.get("https://pokeapi.co/api/v2/pokemon/125/")
.then((response) => {
	let data = response.data
	let section = document.querySelector("#pokeInfo3")
	let index = document.querySelector("#id3")
	let name = document.querySelector("#name3")
	let hp = document.querySelector("#hp3")
	let attack = document.querySelector("#attack3")
	let defense = document.querySelector("#defense3")
	let abl1 = document.querySelector(".abl1")
	let abl2 = document.querySelector(".abl2")
	let abl3 = document.querySelector(".abl3")
	let abl4 = document.querySelector(".abl4")

	let electabuzz = new Pokemon (
		data.id,
		data.name,
		data.stats[5].base_stat,
		data.stats[4].base_stat,
		data.stats[3].base_stat,
		data.abilities[0].ability.name,
		data.abilities[1].ability.name,
		data.moves[3].move.name,
		data.moves[16].move.name,
	)
	index.innerHTML = "#" + data.id
	name.innerHTML = data.name
	hp.innerHTML = "HP: " + data.stats[5].base_stat
	attack.innerHTML = "ATK: " + data.stats[4].base_stat
	defense.innerHTML = "DEF: " + data.stats[3].base_stat
	abl1.innerHTML = data.abilities[0].ability.name
	abl2.innerHTML = data.abilities[1].ability.name
	abl3.innerHTML = data.moves[3].move.name
	abl4.innerHTML = data.moves[16].move.name

})
.catch((error) => {
  console.log(error)
})