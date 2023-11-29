const marvel_heros = ["thor", "ironMan", "spiderMan"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
//both arrays won't merge instead dc_heros array will be pushed in array as single entity of arrays
//hence array can take any data, even arrays
// console.log(marvel_heros); //[ 'thor', 'ironMan', 'spiderMan', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); //flash

//-> using concat both array will merge and return as new array
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); //[ 'thor', 'ironMan', 'spiderMan', 'superman', 'flash', 'batman' ]

//-> best approach is using spread operator ...
const all_new_heros = [...marvel_heros, ...dc_heros] //spread out value of each array
console.log(all_new_heros); //[ 'thor', 'ironMan', 'spiderMan', 'superman', 'flash', 'batman' ]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//-> flat returns a new array with all subarray elements concatenated into it
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]


console.log(Array.isArray("adnan")) //false
//'from' converts into array
console.log(Array.from("adnan")) // [ 'a', 'd', 'n', 'a', 'n' ]
// console.log(Array.from({name: "adnan"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

// Array.of(element1, element2, sff, fs); returns a new array from set of elements
console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]