// if 

// syntax

// if(condition){

// }

// <, >, <=, >=, == (this operator will check only value), !=, === (this operator will check value and Data type), !==

if(2 == "2"){
    console.log("executed")
}

if(2 === "2"){
    console.log("===")
}

if(2 !== "2"){
    console.log("!==")
}


// if-else

// syntax

// if(){

// }
// else{

// }

const score = 200;

if(score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);
}
else{
    console.log("not fly")
}


// short hand if

// you can write, but it is not good practice. 
const balance = 1000

if(balance > 500) console.log("test1"),
console.log("test2"),
console.log("test3");








