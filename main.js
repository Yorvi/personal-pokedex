let ul = document.querySelector("ul")

// container class
class PocketMonsters {
	constructor() {
		this.all = [];
	}

	// defines method to add to PokcetMonsters class
	// it accepts Pokemon object and 
	add(pokemon) {
		this.all.push(pokemon)
	}
}

// individual class
class Pokemon {
	constructor(index, pokemon, hp, attack, defense, abilities) {
		this.id = id;
		this.name = name;
		this.hp = hp;
		this.attack = attack;
		this.defense = defense;
		this.abilities = abilities;
	}
}

// let pokemon = new Pokemon([
// 	new Pokemon(
// 		data[0]["#059"],
// 		data[0]['Arcanine'],
// 		data[0][90],
// 		data[0][110],
// 		data[0][80], 
// 		data[0]['Flare Blitz','Extreme Speed','Wild Charge','Morning Sun']
// 	),
// 	new Pokemon(
// 		data[1]["#063"],
// 		data[1]['Abra'],
// 		data[1][70],
// 		data[1][80],
// 		data[1][100], 
// 		data[1]['Psybeam','Psyshock','Calm Mind','Recover']
// 	),
// 	new Pokemon(
// 		data[2]["#125"],
// 		data[2]['Electabuzz'],
// 		data[2][65],
// 		data[2][83],
// 		data[2][61], 
// 		data[2]['Thunderbolt','Thunderwave','Cross Chop','Light Screen']
// 	)
// ])

console.log(PocketMonsters)
axios.get("https://pokeapi.co/", {
}).then((response) => {
//  console.log(response)
	let data = response.data.pokemon
	let pocketMonsters = new PocketMonsters()

	data.forEach((item) => {
		let li = document.createElement("li")
		let pokemon = new Pokemon([
			new Pokemon(
				item[0]["#059"],
				item[0]['Arcanine'],
				item[0][90],
				item[0][110],
				item[0][80], 
				item[0]['Flare Blitz','Extreme Speed','Wild Charge','Morning Sun']
			),
			new Pokemon(
				item[1]["#063"],
				item[1]['Abra'],
				item[1][70],
				item[1][80],
				item[1][100], 
				item[1]['Psybeam','Psyshock','Calm Mind','Recover']
			),
			new Pokemon(
				item[2]["#125"],
				item[2]['Electabuzz'],
				item[2][65],
				item[2][83],
				item[2][61], 
				item[2]['Thunderbolt','Thunderwave','Cross Chop','Light Screen']
			)
		])

		pocketMonsters.add(pokemon)
		li.innerHTML = pokemon.id
		ul.appendChild(li)
	})

	// let arcanine = new Pokemon(
	// 	data[59]["id"], // pokemon index number in the API
	// 	data[59]["name"], // pokemon name in the API
	// 	data[59]["hp"], // ?? nested in stats/stat/name/hp base_stat: 95
	// 	data[59]["attack"], // ?? nested in stats/stat/name/attack base_stat: 110
	// 	data[59]["defense"], // ?? nested in stats/stat/name/defense base_stat: 80
	// 	data[59]["abilities"] // abilities/ability/name (there is three slots for 3 abilities)
	// )

	// let abra = new Pokemon(
	// 	data[63]["id"],
	// 	data[63]["name"],
	// 	data[63]["hp"],
	// 	data[63]["attack"],
	// 	data[63]["defense"],
	// 	data[63]["abilities"]
	// )

	// let electabuzz = new Pokemon(
	// 	data[125]["id"],
	// 	data[125]["name"],
	// 	data[125]["hp"],
	// 	data[125]["attack"],
	// 	data[125]["defense"],
	// 	data[125]["abilities"]
	// )

}).catch((error) => {
  console.log(error)
})














// let abra = new Pokemon("#063",'abra', 70, 80, 100, [
// 	'Psybeam',
// 	'Psyshock',
// 	'Calm Mind',
// 	'Recover',
// ]);
// let electabuzz = new Pokemon("#125",'electabuzz', 65, 83, 61, [
	// 'Thunderbolt',
	// 'Thunderwave',
	// 'Cross Chop',
	// 'Light Screen',
// ]);
