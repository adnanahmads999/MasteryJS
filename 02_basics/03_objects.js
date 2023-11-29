// objects created using constructors are singleton
// object.create


// otherwise made using literals then they are not singleton

// object literals
// values are stored in key value pairs
const jsUser= {
    name: "Adnan", //Actual scenario "name": "Adnan"
    "full name": "Adnan Ahmad",
    age: 13,
    location: "Bangalore",
    email: "adnan@xyz.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thursday"]
}

//There are 2 methods to fetch in objects
console.log(jsUser.email); //Method 1
//above can be also fetched like below fetched
console.log(jsUser["email"]); //Method 2 - preferred one
// bcz we can't fetch full name using method 1 bcz of spacing in mid, so we need method 2
console.log(jsUser["full name"]);


// to declare symbol and use in objects
// const mySym = Symbol("key1");
// const jsUser1= {
//     name: "Adnan", //Actual scenario "name": "Adnan"
//     location: "Bangalore",
//     mySym: "myKey1"
// }
// console.log(jsUser1.mySym); //myKey1
// console.log( typeof jsUser1.mySym); //string, it should have given symbol

// to fix this instead of writing mySym in object write [mySym]
const mySym1 = Symbol("key1");
const jsUser2= {
    name: "Adnan", //Actual scenario "name": "Adnan"
    location: "Bangalore",
    [mySym1]: mySym1 //updated line
}
console.log(jsUser2[mySym1]); //Symbol(key1)
// console.log(typeof jsUser2[mySym1]); //symbol

jsUser.email = "adnan@microsoft.com"
// Object.freeze(jsUser) //it freezes object and prevents it from changing further

jsUser.greeting = function(){
    console.log("Hello js user");
}
console.log(jsUser.greeting); //[Function (anonymous)]
console.log(jsUser.greeting()); //Hello js user

jsUser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`); //to access element from its own object, this keyword is used
}
console.log(jsUser.greeting2()); //Hello js user, Adnan
