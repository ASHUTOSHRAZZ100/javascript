const userEmail = "razz@.ai"

if(userEmail){
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}
const userEmailArray = []

if(userEmailArray){
    console.log("Got user email array")
}
else{
    console.log("Don't have user email array")
}

// false value

// false, 0, -0, BigInt 0n, "", null, undefine, NaN

// truthy value

// "0", "false", " ", [] , {}, function(){


if(userEmailArray.length === 0){
    console.log("array is empty")
}
else {
    console.log("array is not empty")
}


const userEmailObject = {}

if(Object.keys(userEmailObject).length === 0){
    console.log("Object is empty")
}
else{
    console.log("Object is not empty")
}

// false == 0   true
// false == ""  true
// 0 == ""      true


// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10

console.log(val1) // 5

let val2 = null ?? 10
console.log(val2) // 10

let val3 = undefined ?? 20
console.log(val3) // 20

let val4 = null ?? 10 ?? 15
console.log(val4)



