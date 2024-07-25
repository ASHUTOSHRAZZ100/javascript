function myName(){
    console.log("Ashutosh")
}

// myName // this is function reference
// myName() // this is function execution

console.log(myName) // [Function: myName]

// here undefine because function is not return anything 
console.log(myName()) // Ashutosh  undefined


function addNumber (number1,number2){
    return number1+number2
} 

const result = addNumber(6,4)
console.log(result)

// ==================================== function with Object =======================

function calculateCartPrice(num1){
    return num1;
}

console.log(calculateCartPrice(20))

function calculateCartPrice1(...num1){
    return num1;
}
console.log(calculateCartPrice1(200,500,400,880,73,1)) // [ 200, 500, 400, 880, 73, 1 ]

function calculateCartPrice2(val1,val2,...num){
    return num
}

console.log(calculateCartPrice2(200,500,400,880,73,1)) // val1 = 200, val2 = 500 num = [ 400, 880, 73, 1 ]

const user = {
    username : "Raj",
    price : 458,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price s ${anyObject.price}`)
}

handleObject(user) // Username is Raj and price s 458
// Or 
handleObject({
    username : "Ashu",
    price : 48,
})

const myNewArray = [200,400,5,6,1008]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)) // 400
// Or
console.log(returnSecondValue([2000,5400,895,7126,1008])) // 5400


