"use strict"; // treat all JS code as newer version 

// alert (3+3); // we are using Nodejs, not browser

// number => 2 to power 53
// BigInt
// string => ""
// Boolean => true/false
// null => standalone CSSMathValue
// undefined => 
// symbol => unique 
// object 

let age = 63
const name = "Raj"

console.log(typeof age) // number
console.log(typeof null) // object
console.log(typeof undefined) // undefined

console.table([typeof age, typeof name, typeof null, typeof undefined])


let user = {
    "name" : "killer",
    "id" : 1236,
    "gender" : "Male"
}
console.table(user)
console.log(user)
