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

// console.log("A", myArr6)

const myn1 = myArr6.slice(1, 3)
// console.log("B", myArr6)
// console.log(myn1)

const myn2 = myArr6.splice(1, 3)
// console.log("c",myArr6)
// console.log(myn2)



// ================= Adding some more point in array ========================


const boyName = ['Kumar','Raj','Raja','Ashu']
const girlName = ['Rani','Kumari','Usha']

// boyName.push(girlName)

// console.log(boyName)
// console.log(typeof boyName)

const nameArray = boyName.concat(girlName)
console.log(nameArray) // ['Kumar', 'Raj','Raja',  'Ashu','Rani',  'Kumari','Usha']


// spread 

const allNames = [...boyName,...girlName]
console.log(allNames) // ['Kumar', 'Raj','Raja',  'Ashu','Rani',  'Kumari','Usha']


const multiArray = [1,2,3,[4,5,6,[1,5,8,9,[8,6],"Rk"],"hi"],[92,8,3,4,5]]

const realMultiArray = multiArray.flat(Infinity)

console.log(realMultiArray)

console.log(Array.isArray("Ashutosh")) // checking is this array or not 

console.log(Array.from("Ashutosh")) // converting in Array

let score1 = 100
let score2 = 500
let score3 = 300

console.log(Array.of(score1,score2,score3)) // converting in Array 
