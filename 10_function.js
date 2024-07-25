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


