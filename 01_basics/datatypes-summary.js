//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//-> Javascript is a dynamically typed language
const score = 100 //Number
const scoreValue = 100.3 //Number

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false, both have same value passed, still both are unique

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["spiderman", "ironman", "avengers"];
let myObj = {
    name: "adnan",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
