//Function Declaration
function sayHello() {
    console.log("Hello!")
}

sayHello()

function sayHelloTo(name) {
    console.log(`Hello ${name}!`)
}

sayHello("Mike");

function returnHi() {
    return "Hi"
}

let greeting = returnHi()
console.log(greeting)
console.log(returnHi())

function returnHiTo(name) {
    return `Hi ${name}`
}

console.log(returnHiTo("John")) 