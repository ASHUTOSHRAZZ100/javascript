// for loops

const arr = [1, 2, 3, 4, 5]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element)
}

// while 

console.log("while loop")
let index = 1;

while (index <= 10) {
    // console.log(index)
    index++;
}

// do-while loop

console.log("Do while loop")

let num1 = 12
do {
    // console.log(num1)

} while (num1 != 12);

// break 

index = 1

while (index <= 10) {
    if (index === 6) {
        console.log("Break");
        break;
    }
    // console.log(index)
    index++;
}

// continue

index = 1

while (index <= 10) {
    if (index === 6) {
        console.log("continue");
        index++;
        continue;
    }
    // console.log(index)
    index++;
}



// foreach Loop

// syntax foreach((item,index,array)=>{})
// foreach value return nahi kara tha ha 

// Note :- callback function does not have a name 

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (item) {
    // console.log(item)
})

// Or

coding.forEach((val) => {
    // console.log(val)
})

function printMe(item) {
    // console.log(item)
}

coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr)
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
]


myCoding.forEach((item)=>{
    // console.log(item.languageName)
})


const values = coding.forEach((item)=>{
    console.log(item)
    return item
})

// console.log(values)


// filter

// filter value return kara ta ha 

const myNumber = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNumber.filter((num)=> num > 4)

// console.log(newNum)

// Or 

const newNum1 = myNumber.filter((num) => {
    return num > 5
})
console.log(newNum1)

// By using foreach

const newNum2 = []
myNumber.forEach((num) => {
    if(num > 6){
        newNum2.push(num)
    }
})

console.log(newNum2)
