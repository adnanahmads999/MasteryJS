//Arrays

const myArr = [0, 1, 2, 3, 4, 5] //method 1 of declaring
const movies = ["spiderMan", "batMan"]

const myArr2 = new Array(1, 2, 3, 4) //method 2 of declaring
// console.log(myArr[1]);

//-> Array METHODS

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //it is used to insert at beginning of array
// - however it is not considered good bcz it needs to shift all value forward
// myArr.shift() //it removes element from beginning

// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(3)); //3
// console.log(myArr.indexOf(21)); //-1, bcz it does not exist

const newArr = myArr.join()

// console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
// console.log( newArr); // 0,1,2,3,4,5
// console.log(typeof newArr); //string

//-> slice, splice

console.log("A: ", myArr); // A:  [ 0, 1, 2, 3, 4, 5 ]
//slice returns a section of Array
const myn1 = myArr.slice(1, 3) //3 will be not included

console.log(myn1); //[ 1, 2 ]
console.log("B: ", myArr); // B:  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3) //in splice 3 will also be included
console.log(myn2); // [ 1, 2, 3 ]
//-> However, as we can see after using splice, original array has been changed also
// The splice value have been removed
console.log("C: ", myArr); // C  [ 0, 4, 5 ]

//hence splice manipulates original array as well