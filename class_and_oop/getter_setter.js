class User {
    constructor(email, password) {
        this.email = email,
            this.password = password
    }
    get password() {
        return `${this._password.toUpperCase()} password`
    }
    set password(value) {
        this._password = value
    }
    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }
}

const ashutosh = new User('ashut@gmaiil.com', 'ashu')
console.log(ashutosh.password)
console.log(ashutosh._email)



