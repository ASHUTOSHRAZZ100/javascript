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

// =========================== Scope ===========================

if (true ){
    let val1 = 10;
    const val2 = 30;
    var val3 = 40;
    val4 = 70;
}

// console.log(val1) // error
// console.log(val2) // error
console.log(val3) // 40
console.log(val4) // 7


// =========================== Nested Scope ======================

function one(){
    const username = "Raj"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website) // error because website is not define in this scope
    two()
}

one()

