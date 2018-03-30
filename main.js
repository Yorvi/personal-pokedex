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
	render(){
		let li = document.createElement("li") //depends what you want to set it as
		li.innerHTML = this.id + ":" + this.name + ":" + this.hp + ":" + this.attack + "+"

	}
}

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
}).catch((error) => {
  console.log(error)
})

