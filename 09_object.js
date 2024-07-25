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

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser."last name")// error
// console.log(JsUser["last name"])

// console.log(JsUser.mySymbol) // mykey2
// console.log(typeof JsUser.mySymbol) // string

// console.log(JsUser[mySymbol]) // mykey2
// console.log(typeof JsUser[mySymbol]) // string

JsUser.email = "ashytsn@gmail.com"
// Object.freeze(JsUser)// object can't change because we use freeze function 
JsUser.email = "razz@gmail.com"
JsUser.age = 80
// console.log(JsUser)

// insert function in object
JsUser.greeting = function (){
    // console.log(`Hello Js User, ${this.name} ${this["last name"]}`)
    // return "hii"
}

// console.log(JsUser.greeting())


// =========================  Adding some more point in Objects ==================================

const tinderUser = new Object() // this is called singleton object 
// console.log(tinderUser) // {}

const tinderUser1 = {} // this is called non-singleton object 
// console.log(tinderUser1) // {}

 tinderUser.id = "156sdf"
 tinderUser.name = "Rohan"
 tinderUser.isLoggedIn = false
 console.log(tinderUser)

 const regularUser = {
    email : "ashutoshrazz100@gmal.com",
    fullname :{
        userFullname :{
            firstname : "Ashu",
            lastname : "Raj"
        }
    }
 }

//  console.log(regularUser.fullname.userFullname.firstname) // Ashu
//                                     // Or 
//  console.log(regularUser["fullname"]["userFullname"]["firstname"]) // Ashu

 const obj1 = {
    1:"a", 2 : "c" ,3 : "d"
 }
 const obj2 = {
    4 : "s",5 : "f"
 }

 const obj3 = {obj1,obj2}
//  console.log(obj3) 
// {
//    obj1: { '1': 'a', '2': 'c', '3': 'd' },
//    obj2: { '4': 's', '5': 'f' }
//  }

// console.log(obj3.obj1[1]) // a
// console.log(obj3["obj2"][5]) // f

const obj4 = Object.assign(obj1,obj2) // you can write like this also but it is not good practice
// console.log(obj4) // { '1': 'a', '2': 'c', '3': 'd', '4': 's', '5': 'f' }

const obj5 = Object.assign({},obj1,obj2) // this is good practice
// console.log(obj5) // { '1': 'a', '2': 'c', '3': 'd', '4': 's', '5': 'f' }

const obj6 = {...obj1,...obj2} // or use this syntax
// console.log(obj6) // { '1': 'a', '2': 'c', '3': 'd', '4': 's', '5': 'f' }

const user = [
    {
        id : 1,
        email : "razz100@gmail.com"
    },
    {
        id : 1,
        email : "razz100@gmail.com"
    },
    {
        id : 1,
        email : "razz100@gmail.com"
    },
    {
        id : 1,
        email : "razz100@gmail.com"
    },
]

console.log(user[1].email)

console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser)) // [ '156sdf', 'Rohan', false ]

console.log(Object.entries(tinderUser)) // [ [ 'id', '156sdf' ], [ 'name', 'Rohan' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")) // true
console.log(tinderUser.hasOwnProperty("isSingedIn")) // false
