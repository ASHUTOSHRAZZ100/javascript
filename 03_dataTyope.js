let scoreInNumber = 33
let scoreInString = NaN

console.log(typeof(scoreInNumber));
console.log(typeof scoreInString);

let scoreInStringToNumber = Number(scoreInString)

console.log(typeof scoreInStringToNumber)
console.log(scoreInString)

// Converting In Number 
// "33" => 33
// "33and" => NaN
// "ashu" => NaN
// null => 0
// undefined => NaN
// true => 1
// false => 0

// Converting in Boolean
let isLoggedIn = NaN
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.table([typeof booleanIsLoggedIn])
console.log(booleanIsLoggedIn)

// Converting in String
 
let value = NaN
let valueToString = String(value)

console.log(typeof valueToString)
console.log(valueToString)