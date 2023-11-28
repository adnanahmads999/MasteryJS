const score = 400 //here js will automatically define its data type as number
// console.log(score) //400

//to explicitly define number to make sure its always number below method is used
const balance = new Number(100);
// console.log(balance) // [Number: 100]
// console.log(balance.toString().length); //3
// console.log(balance.toFixed(2)); //100.00

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); //123.9 Rounded off to 4th digit

const hundreds = 1000000
//-> to make above values more readable using commas then use toLocaleString
// console.log(hundreds.toLocaleString()); //1,000,000 It is US style commas
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000 It is Indian style


// +++++++++++++++++ Maths +++++++++++++++++++++++++

// console.log(Math); //Object [Math] {}
const c=-4
// console.log(Math.abs(c)); //4 , abs gives positive result
// console.log(Math.round(9.3)); //9
// console.log(Math.ceil(9.3)); //10, ceil will always chose top value
// console.log(Math.floor(9.6)); //9 , floor will always take bottom value
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

//-> Random function
// It will always give random value between 0 and 1
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.round(Math.random()*10+1)); //will always give 1 digit random value


// IMPORTANT: To get value between something to something use below formula

const min = 10
const max = 16

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

