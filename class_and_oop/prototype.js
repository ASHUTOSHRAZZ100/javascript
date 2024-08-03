let myName = "Ashutosh"
// console.log(myName.length);

myName = "Ashutosh                 "
// console.log(myName.trueLength());

let myHeros = ["thor","spiderman"];

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.ashutosh = ()=>{
    console.log(`ashutosh Razz is present in all object`)
}

// heroPower.ashutosh()
// myHeros.ashutosh()

Array.prototype.heyAshutosh = ()=>{
    console.log(`Ashutosh ays hello`);
    
}

// myHeros.heyAshutosh()
// heroPower.heyAshutosh() // error


// inheritance 

const user = {
    name : 'chai',
    email : "chai@gmail.com",
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}


const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : TeachingSupport // inheritance TeachingSupport
}

Teacher.__proto__ = user;

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName = "chai              ";
String.prototype.trueLength = function (){
    console.log(`${this}`)
    // console.log(this.name)
    console.log(`True length is : ${this.trim().length}`)
}


anotherUserName.trueLength()

