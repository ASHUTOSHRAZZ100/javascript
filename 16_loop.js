// for loops

const arr = [1,2,3,4,5]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
}

// while 

console.log("while loop")
let index = 1;

while (index <= 10) {
    console.log(index)
    index++;
}

// do-while loop

console.log("Do while loop")

let num1 = 12
do {
    console.log(num1)
    
} while (num1 != 12);

// break 

index = 1

while (index <= 10) {
    if(index === 6){
        console.log("Break");
        break;
    }
    console.log(index)
    index++;
}

// continue

index = 1

while (index <= 10) {
    if(index === 6){
        console.log("continue");
        index++;
        continue;
    }
    console.log(index)
    index++;
}

