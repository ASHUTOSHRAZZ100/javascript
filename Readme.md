https://api.github.com/users/ashutoshrazz100

# Javascript

JavaScript is a dynamically typed language.

## variables

const

let

var

Note:- Prefer not to use **var** because of issue n block scope and functional scope

## Data Type

- Number
- String
- Boolean
- Null
- Undefined
- Symbol
- Object and some more

Data Type are two types are:

- primitive
- Reference (Non-primitive)

primitive Data type are 7 types:

- String
- Number
- Boolean
- null
- undefined
- Symbol
- BigInt

Non-primitive Data type are 3 types:

- Array
- Objects
- Function

## Data Type Conversion

- **Converting in Number**

| values | typeof output | output|
|--------|---------------|-------|
| 33 | number | 33 |
| "33" | number | 33 |
| "635abab" | number | NaN|
| "ashu" | number |  NaN|
| null | number | 0|
|undefine | number | NaN|
| true | number | 1|
|false | number | 0|
|NaN | number | NaN |

- **Converting in Boolean**

| values | typeof output | output|
|--------|---------------|-------|
| 33 | boolean | true |
| "33" | boolean | true |
| "635abab" | boolean | true|
| "ashu" | boolean |  true|
| true | boolean | true|
|false | boolean | false|
| "" | boolean | false|
| null | boolean | false|
|undefine | boolean | false|
| NaN | boolean | false|

- **Converting in String**

| values | typeof output | output|
|--------|---------------|-------|
| 33 | string | 3 |
| "33" | string | 36 |
| "635abab" | string | 635abab|
| "ashu" | string |  ashu|
| true | string | true|
|false | string | false|
| " " | string | |
| null | string | null|
|undefine | string | undefine|
| NaN | boolean | NaN|

- **typeof return results**

|Type | Result |
|-----|--------|
|Undefined | undefined|
|null | object |
|Boolean | boolean|
|Number | number |
|Bigint | bigint|
|string | string|
|Symbol | symbol|
| Function | function|
|Any other object | object|

## Memory

- Stack
- Heap

## Event

|Event | Description|
|-----|--------| 
|onchange | An HTML element has been changed|
|onclick  |The user clicks an HTML element|

## setTimeout

- setTimeout is a method or function which iterate once.
- We can use clearTimeout method to stop setTimeout by giving its reference.

```javaScript

    // 2000 means 2 second
   const stop =  setTimeout((name)=>{
        console.log(name)
    },2000,"Ashutosh Raj")
    
    clearTimeout(stop);

```
## setInterval

- setInterval is a method or function which iterate continue in given timestamp.
- We can use clearInterval method to stop setTimeout by giving its reference.

```javaScript

    // 2000 means 2 second
   const stop =  setInterval((name)=>{
        console.log(name)
    },2000,"Ashutosh Raj")
    
    clearInterval(stop);

```