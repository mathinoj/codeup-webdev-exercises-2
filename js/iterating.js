(function(){
	"use strict";

	/**
	 * TODO:
	 * Create an array of 4 people's names and store it in a variable called
	 * 'names'.
	 */
let names = ['Jo', 'Moe', 'Beau', 'Eddie'];
	/**
	 * TODO:
	 * Create a log statement that will log the number of elements in the names
	 * array.
	 */
console.log(names.length)
	/**
	 * TODO:
	 * Create log statements that will print each of the names individually by
	 * accessing each element's index.
	 */
	console.log(`This is: ${names[0]}`)
	console.log(`This is: ${names[1]}`)
	console.log(`This is: ${names[2]}`)
	console.log(`This is: ${names[3]}`)


	/**
	 * TODO:
	 * Write some code that uses a for loop to log every item in the names
	 * array.
	 */
	let x = names.length
	for(let i = 0; i < x; i++) {
		console.log(names[i])
	}
	//
	// let y = names.length
	// for(let i = 0; i < y; i++) {
	// 	console.log(names[i].length)
	// }

	/**
	 * TODO:
	 * Refactor your above code to use a `forEach` loop
	 */
	names.forEach((name => console.log(`Here is a name: ${name}`)))

	/**
	 * TODO:
	 * Create the following three functions, each will accept an array and
	 * return an an element from it
	 * - first: returns the first item in the array
	 * - second: returns the second item in the array
	 * - last: returns the last item in the array
	 *
	 * Example:
	 *  > first([1, 2, 3, 4, 5]) // returns 1
	 *  > second([1, 2, 3, 4, 5]) // returns 2
	 *  > last([1, 2, 3, 4, 5]) // return 5
	 */
	let first = [1, 2, 3, 4, 5]
	let second = [1, 2, 3, 4, 5]
	let last = [1, 2, 3, 4, 5]
	function one(arr){
		return arr[0];
		// console.log(first[0])
	}
	console.log(one(names))

	function two(arr){
		return arr[1];
		// console.log(second[1])
	}
	console.log(two())

	function third(arr){
		return arr(last[last.length - 1]);
		// console.log(last[last.length - 1])
	}
	console.log(third(names))
})();