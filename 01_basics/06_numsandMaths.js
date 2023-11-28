const score = 400 //here js will automatically define its data type as number
console.log(score) //400

//to explicitly define number to make sure its always number below method is used
const balance = new Number(100);
console.log(balance) // [Number: 100]
console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //100.00

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); //123.9 Rounded off to 4th digit

const hundreds = 1000000 
//-> to make above values more readable using commas then use toLocaleString
console.log(hundreds.toLocaleString()); //1,000,000 It is US style commas
console.log(hundreds.toLocaleString('en-IN')); //10,00,000 It is Indian style




