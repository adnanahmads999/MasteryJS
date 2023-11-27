let score= "73"

console.log(typeof(score)); //string

let valueInNumber=  Number(score); //conversion from string to number
console.log(typeof(valueInNumber)); //changed to Number


let score2= "73ab"
let valueInNumber2= Number(score2);
console.log(typeof(valueInNumber2)); //Number
console.log(valueInNumber2); //NaN
// above is Not a Number because it contained ab as well, however type of NaN is also a Number
// so always check while doing such operations

let score3= undefined
let valueInNumber3= Number(score3);
console.log(typeof(valueInNumber3)); //Number
console.log(valueInNumber3); //NaN

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "abd"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "abd" => true

//                          Operations

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //power of 2 raise 3
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " adnan"

let str3 = str1 + str2
// console.log(str3);  //hello adnan

console.log(1 + "2") //12
console.log("1" + 2) //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //32  , Added first 2 numbers and appended with 2

