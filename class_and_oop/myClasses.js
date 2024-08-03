// ES6

class User1 {
    constructor(username,email,password) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

let chai = new User1('chai','chai@gmail.com','12365')

console.log(chai.encryptPassword())
console.log(chai.changeUsername())

// behind the scene

function User(username,email,password){
    this.username = username;
    this.password = password;
    this.email = email;
}

User.prototype.encryptPassword = function (){
    return `${this.password}efgh`
}

User.prototype.changeUsername = function (){
    return `${this.username.toUpperCase()}`
}

const tea = new User('tea','tea@gmail.com','963258')
 chai = new User('chai','chai@gmail.com','12365')


console.log(tea.encryptPassword())
console.log(tea.changeUsername())
console.log(chai.encryptPassword())
console.log(chai.changeUsername())



