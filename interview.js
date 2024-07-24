// JavaScript is a dynamically typed language

// Data Type are two types are:

// primitive 
// primitive are 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id)
console.log(anotherId)

console.log(id === anotherId) // false

// Reference (Non-primitive) Array, Objects, Function

const names = ['Raj','Kumar','Rani','Foo']

let myObj = {firstName : "Ashutosh",
    lastName : "Raj",
    age : 21,
    gender : "Male"
}

console.log(myObj)

const myFunction = function (){
    console.log("Hello Raj")
    return "Hii"
}
console.log(myFunction)

console.log(typeof myFunction)
console.log(typeof myObj)
console.log(typeof names)

