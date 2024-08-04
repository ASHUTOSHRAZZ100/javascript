const User = {
    _email : "ashu@gmail.com",
    _password : 'polki',

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value
    },
    get password(){
        return this._email.toUpperCase();
    },
    set password(value){
        this._password = value
    }

}

const tea = Object.create(User)

console.log(tea.email);

