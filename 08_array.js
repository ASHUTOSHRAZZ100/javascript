// array

const myArr = [0, 1, "true", false];
// console.log(myArr)

const myArr1 = ["Raj", 85, "age"]
// console.log(myArr1[2])


const myArr3 = new Array(1, 5, 85, "false")
// console.log(myArr3[2])

// Array Methods

myArr3.push(90)
// console.log(myArr3)

let arr = myArr.pop()
// console.log(arr)
// console.log(myArr)

myArr.unshift(99)
// console.log(myArr)

myArr.shift()
// console.log(myArr)

const newArray = myArr.join()

// console.log(newArray) // 0,1,true
// console.log(typeof newArray) // string

// slice, splice

myArr6 = [0, 1, 2, 3, 4, 5, 6, 7]

console.log("A", myArr6)

const myn1 = myArr6.slice(1, 3)
console.log("B", myArr6)
console.log(myn1)

const myn2 = myArr6.splice(1, 3)
console.log("c",myArr6)
console.log(myn2)




