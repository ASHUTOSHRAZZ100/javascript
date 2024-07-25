// singleton
Object.create


// object literals

const mySymbol = Symbol(56)

const JsUser = {
    name : "Ashutosh",
    "last name" : "Raj",
    [mySymbol] : 2,
    age : 22,
    location : "Sitamarhi",
    email : "ashutoshrazz100@gamil.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
// console.log(JsUser."last name")// error
console.log(JsUser["last name"])

// console.log(JsUser.mySymbol) // mykey2
// console.log(typeof JsUser.mySymbol) // string

console.log(JsUser[mySymbol]) // mykey2
console.log(typeof JsUser[mySymbol]) // string

JsUser.email = "ashytsn@gmail.com"
// Object.freeze(JsUser)// object can't change because we use freeze function 
JsUser.email = "razz@gmail.com"
JsUser.age = 80
console.log(JsUser)

// insert function in object
JsUser.greeting = function (){
    console.log(`Hello Js User, ${this.name} ${this["last name"]}`)
    // return "hii"
}

console.log(JsUser.greeting())


