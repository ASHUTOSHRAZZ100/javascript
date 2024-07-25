
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





