// const tinderUser = new Object() //singleton object

//not singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "mrX"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "someone@gmail.com",
    fullName: {
        userFullName: {
            firstName: "adnan",
            lastName: "ahmad"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName); //access of objects inside objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) //combines all objects

const obj3 = {...obj1, ...obj2} //combining objects, preferred
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// ->to take out keys or values 
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: "js practice",
    timePerDay: "60minutes",
    learner: "adnan"
}
