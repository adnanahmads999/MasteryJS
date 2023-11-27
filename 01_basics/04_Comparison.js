// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(2 == "2");

console.log("02">1); //true

console.log(null> 0) //false
console.log(null == 0) //false
console.log(null >= 0) //false , Unpredictable behavior

// The reason is that an equality check == and comparisons ><>=
// <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why null >= 0 is true and null > 0 is false.

//strict checking
// === it not only checks values but also check their data types as well
console.log(2 === "2"); //false, because it also checks it data type

