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


// else-if

if(balance < 500){
    console.log("less than 500")
}
else if(balance < 750){
    console.log("less than 750")
}
else if(balance < 900){
    console.log("less than 900")
}
else{
    console.log("less than 1200")
}




