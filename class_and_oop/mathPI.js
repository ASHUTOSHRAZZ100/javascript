console.log(Math.PI)
Math.PI = 63
console.log(Math.PI)

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(descriptor)

const chai = {
    name: 'ginger chai',
    email: 'ashutoshrazz@gmail.com',
    price: 250,
    isAvailable: true,
    orderChai: function () {
        console.log(`${this.name} nahi bani`)
    }
}

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`)
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'name', {
    writable: false, // stop overwrite
    enumerable: false,// stop iteration
    configurable: false,
});

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`)
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"))
chai.name = 'masala chai'
console.log('chai name is', chai.name)

console.log(Object.getOwnPropertyDescriptor(chai, "price"));
chai.price = 852;
console.log(`chai price is ${chai.price}`)





 const a = Object.defineProperties(chai, {
    price: {
        value: 653,
        writable: false,
        enumerable: false,
        configurable: false,
    },
    isAvailable: {
        writable: false,
        enumerable: false,
        configurable: false,
    }
})

console.log(Object.getOwnPropertyDescriptors(a))

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`)
    }
}
