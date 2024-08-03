function setUserName(username){
    // complex DB calls 
    this.username = username
    console.log('callwed')

}

function createUser (username,email,password){
    setUserName.call(this,username)
    this.email  = email
    this.password = password
}

const chai = new createUser('chai','chai@gmail.com','15488')

console.log(chai);







