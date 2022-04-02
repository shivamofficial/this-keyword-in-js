let user = {
    age: 30,
    firstName: 'Rahul',
    sayHi: function () {
        console.log('hi', this.firstName)
    }
}

var firstName = 'Aditi'
function sayHi() {
    console.log(this) //inside a normal function, "this" refers to the global object
    console.log(this.firstName)
}
let user = {
    firstName: 'rahul',
    objectType: 'USER'
}
let admin = {
    firstName: 'shruti',
    objectType: 'ADMIN'
}

let user2 = {
    firstName: 'Bhanu',
    sayHi: () => {
        console.log(this.firstName) //"this" inside an arrow function refers to the WINDOW object
    }
}

user.funcUser()
admin.funcAdmin()
sayHi()
user2.sayHi()




// question

let ladder = {
    step: 0,
    up() {
        // this.step++
        console.log(this.step++)
    },
    down() {
        this.step--
        console.log('decremented')
    },
    showStep() {
        console.log(this.step)
    }
}

ladder.up()
ladder.up()
ladder.down()
ladder.down()
ladder.down()
ladder.showStep()//-1
ladder.up()
ladder.up()
ladder.up()
ladder.showStep()//2


const obj = {
    message: 'Hello, World',
    getMessage() {
        const message = 'Hello, Earth'
        return this.message
    }
}

let result = obj.getMessage()
console.log(result) //


let obj = {
    who: 'World',
    greet: function () {
        console.log(`Hello, ${this.who}`)
    },
    farewell: () => {
        console.log(`Goodbye, ${this.who}`)
    }
}

obj.greet()
obj.farewell()
