
// console.log(addOne(8))
function addOne(num){
    return num;
}

// console.log(addOne(5))

// console.log(addTwo(9)) // error will occur

const addTwo = function (num){
    return num
}

// console.log(addTwo(6))

// ========================== this =======================

const user = {
    username : "Raj",
    price : 458,
    welcomeMessage : function (){
        // console.log(`${this.username} welcome to website`)
    }
}
user.welcomeMessage()

// console.log(this) // {}

function chai (){
    let username = "RAj";
    console.log(this.username) // undefine
}

chai()

const chai1 = function (){
    let username = "RAj";
    console.log(this.username) // undefine
}
chai1 ()

// ========================= Arrow function ========================

const chai2 = () =>{
    let username = "RAj";
    console.log(this.username) // undefine
}

// explicit return
const addition = (num1,num2) => {
    return num1+num2
}

console.log(addition(5,8)) // 13

// Implicit return
const addition1 = (num1,num2) => num1+num2

console.log(addition1(4,6)) // 10

const addition3  = (num1, num2) => (num1+num2)

console.log(addition3(6,8)) // 14

const fun = ()=>({username : "ashutosh"})

console.log(fun()) // { username: 'ashutosh' }
console.log(fun().username) // ashutosh
console.log(fun()["username"]) // ashutosh






