const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Async task is completed');
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("promise consume")
})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task : 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function (resolved, reject) {
    setTimeout(() => {
        resolved({ userName: "Chai", email: "chai@example.com" })
    }, 1000);
})

promiseThree.then(function (user) {
    console.log(user)
})


const promiseFour = new Promise(function (resolved, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolved({ userName: "Ashutosh", email: "chai@example.com" })
        }
        else {
            reject('ERROR : something went wrong')
        }
    }, 1000);
})

promiseFour.then(function (user) {
    console.log(user)
    return user.userName
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})


const promiseFive = new Promise(function (resolved, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolved({ userName: "Javascript", password: "1234" })
        }
        else {
            reject('E : something went wrong please check')
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    }
    catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// fetch

// URL = 'https://api.github.com/users/ashutoshrazz100';
async function getAllUser() {
    try {
        const response = await fetch('https://api.github.com/users/ashutoshrazz100')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error are ", error)
    }
    finally {
        console.log("completed")
    }
}
// getAllUser()

fetch('https://api.github.com/users/ashutoshrazz100')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log("Error is ", error)
    })
    .finally(() => {
        console.log("fetch completed");
    })

// tcs10iimv
