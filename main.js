let ul = document.querySelector("ul")

// container class
class Poke {
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
	let poke = new Poke()

	data.forEach((item) => {

}).catch((error) => {
  console.log(error)
})

