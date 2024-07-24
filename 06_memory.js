// stack(primitive) , Heap(Non-primitive)

let myName = "Raj"

let anotherName = myName

anotherName = "Ashutosh"

console.log(myName)
console.log(anotherName)

let userOne = {
    email : "user@.com",
    upId : "user@sbi"
}

let useTwo = userOne;

useTwo.email = "ashutosh@gmai.com"

console.log(useTwo.email)
console.log(userOne.email)