// map

const myNumber = [1, 2, 3, 4, 5, 6, 7]

let newNum = myNumber.map((num) => {
    return num + 10
})

// Or 

newNum = myNumber.map((num) => num + 20)

console.log(newNum)


// chaining
newNum = myNumber
    .map((num) => (num * 10))
    .map((num) => (num + 1))
console.log(newNum)

newNum = myNumber
    .map((num) => (num * 10))
    .map((num) => (num + 1))
    .filter((num) => (num > 40))
console.log(newNum)


