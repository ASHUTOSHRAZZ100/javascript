const name = "Raj "
const repCount = 10

// console.log(name + repCount + " value")

console.log(`Hello my name is ${name} and my repo count is ${repCount}`)


const gameName = new String("Ashutosh")

console.log(gameName[0]) // A
console.log(gameName.length)
const upperCaseGameName = gameName.toUpperCase()

console.log(upperCaseGameName)
console.log(gameName)

const newString = gameName.substring(0,6)
console.log(newString)

const anotherString = gameName.slice(-5,-3)
console.log(anotherString)