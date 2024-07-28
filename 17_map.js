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



// reduce method

const array = [1,2,3,4]

const total = array.reduce((acc , currVal)=>{
    console.log(`acc = ${acc} and curr = ${currVal}`)
    return acc+currVal
},0)

console.log(total)

const total1 = array.reduce((acc , currVal)=>{
    console.log(`acc = ${acc} and curr = ${currVal}`)
    return acc+currVal
},2)

console.log(total1)

const total2 = array.reduce((acc , currVal) =>
  (  console.log(`acc = ${acc} and curr = ${currVal}`), acc+currVal),3)

console.log(total2)

const shoppingCart = [
    {
        itemName : "JS course",
        price : 963,
    },
    {
        itemName : "PY course",
        price : 900,
    },
    {
        itemName : "RU course",
        price : 1200,
    },
    {
        itemName : "C++ course",
        price : 500,
    },

]

const totalPay = shoppingCart.reduce((acc,item)=>{
    return acc + item.price
},0)

console.log(totalPay)