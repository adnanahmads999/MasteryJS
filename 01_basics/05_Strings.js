const name = "adnan"
const repoCount = 37

// console.log(name + repoCount + " Value");
//-> Not recommended to concatenate like above using +

//better approach given below using `` and adding js using ${ }
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('gtavice')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);  //3
// console.log(gameName.toUpperCase());     //GTAVICE
console.log(gameName.charAt(2));  //to fetch value at index 2
console.log(gameName.indexOf('t')); //to fetch index where t is present

const newString = gameName.substring(0, 4) //it will copy string from index 0 to 3, LAST IDX IS NOT INCLUDED
console.log(newString); //GTAV

const anotherString = gameName.slice(-8, 4) //if we start from negative, it will slice from ending
console.log(anotherString); //ICE

const anotherStringOne= new String("    Adnan     ")
console.log(anotherStringOne); //    Adnan     
//-> trim method removes additional white spaces spaces from beginning and ending
console.log(anotherStringOne.trim()); //Adnan

const url= "https://localhost.com/file%20nothing"
//-> If we want to replace any element from string suppose %20 then we can do it using
// replace method
console.log(url.replace('%20', '-')); //https://localhost.com/file-nothing

//-> to check if includes certain keywords we can use 'includes' method
console.log(url.includes('local')) //true

//-> Split method is used to split elements based on argument provided
const strSplit= new String("abc-def-ghi");
console.log(gameName.split('-')); //abc def ghi



