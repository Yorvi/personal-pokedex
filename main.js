class Pokemon {
	constructor(pokemon, hp, attack, defense, abilities) {
		this.pokemon = pokemon;
		this.hp = hp;
		this.attack = attack;
		this.defense = defense;
		this.abilities = abilities;
	}
}

let arcanine = new Pokemon('Arcanine', 90, 110, 80, [
	'Flare Blitz',
	'Extreme Speed',
	'Wild Charge',
	'Morning Sun',
]);
let abra = new Pokemon('abra', 70, 80, 100, [
	'Psybeam',
	'Psyshock',
	'Calm Mind',
	'Recover',
]);
let electabuzz = new Pokemon('electabuzz', 65, 83, 61, [
	'Thunderbolt',
	'Thunderwave',
	'Cross Chop',
	'Light Screen',
]);
