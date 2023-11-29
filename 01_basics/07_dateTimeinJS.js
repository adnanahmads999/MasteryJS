//Dates

let myDate= new Date();
console.log(myDate);  //something like 2023-11-29T06:26:19.873Z
//-> above is obviously not readable, so we need a better approach

//-> try converting it to string
console.log(myDate.toString()); //Wed Nov 29 2023 12:00:07 GMT+0530 (India Standard Time)
//now it is somewhat readable
console.log(myDate.toDateString()); //Wed Nov 29 2023
console.log(myDate.toTimeString()); //12:03:03 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString()); //Wed, 29 Nov 2023 06:34:13 GMT

console.log(typeof myDate); //object

//-> to declare any new specific date
let myCreatedDate= new Date(2022, 1, 26);
console.log(myCreatedDate.toDateString()); //Sat Feb 26 2022, month starts from 0 in JS
console.log(myCreatedDate.toTimeString()); //00:00:00 GMT+0530 (India Standard Time)

//Date(year, month(start from 0), date, hour, minute, second);
let myCreatedDate1= new Date(2022, 0, 25, 10, 59, 25);
console.log(myCreatedDate1.toLocaleString()); // 1/25/2022, 10:59:25 AM

//-> Another method where month directly starts from 1 instead of 0, YY-MM-DD
let myCreatedDate2= new Date("2023-01-16")
console.log(myCreatedDate2.toLocaleDateString()); //1/16/2023

//-> to get time at any particular instant then Date.now() is used
let myTimestamp= Date.now();
// console.log(myTimestamp); //1701240528999

let newDate= new Date();
console.log(newDate.getMonth() +1); //11
console.log(newDate.getFullYear()); //2023