(function(){
	"use strict";

	let planets = [
		'Mercury',
		'Venus',
		'Earth',
		'Mars',
		'Jupiter',
		'Saturn',
		'Uranus',
		'Neptune'
	];

	/**
	 * TODO:
	 * Read each console log below, and write some javascript code to perform
	 * the step that it describes
	 */

	console.log('Adding "The Sun" to the beginning of the planets array.');
	console.log(planets.unshift('The Sun'));

	console.log('Adding "Pluto" to the end of the planets array.');
	console.log(planets.push('Pluto'));

	console.log('Removing "The Sun" from the beginning of the planets array.');
	console.log(planets.shift());

	console.log('Removing "Pluto" from the end of the planets array.');
	console.log(planets.pop());

	console.log('Finding and logging the index of "Earth" in the planets array.');
	console.log(planets.indexOf('Earth'))

	console.log("Reversing the order of the planets array.");
	console.log(planets.reverse());

	console.log("Sorting the planets array.");
	console.log(planets.sort());
})();