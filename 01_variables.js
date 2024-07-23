const accountId = 211003003090;
let accountEmail = "ashutoshrazz100@gmail.com";

/*
Prefer not to use var
because of issue n block scope and functional scope
*/
var accountPassword = "1236560";
accountCity = "Puri";

let accountState; // undefined

// account; // can't leave empty


// accountId = 2 // change are not allowed
// console.log(accountId) 

accountEmail = "ashutoshraj@gmail.com" // change are allowed
accountPassword = "85263"
accountCity = "Pune"

console.log(accountEmail)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
