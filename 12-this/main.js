// This en methodos

let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" is the "current object"
      alert(this.name);
    }
  
  };
  
  user.sayHi(); // John

//   Error

let users = {
    name: "John",
    age: 30,
  
    sayHi() {
      alert( users.name ); // leads to an error
    }
  
  };
  
  
  let admin = users;
  users = null; // overwrite to make things obvious
  
  admin.sayHi(); // TypeError: Cannot read property 'name' of null

//   Unbound this

let userr = { name: "John" };
let adminn = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// use the same function in two objects
userr.f = sayHi;
adminn.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
userr.f(); // John  (this == user)
adminn.f(); // Admin  (this == admin)

adminn['f'](); // Admin (dot or square brackets access the method – doesn't matter)

// This en arrow function

// Arrow functions have no this value in their scope, so you can access this value of the object. But Normal functions have this value in their scope, in this example this value of the normal function is globalThis or window. and it allows to you access the global scope. if you call fo2 with this value of object instead of globalThis you get '"hey"'

var greeting = 'hi';

const obj  = {
  greeting: 'hey',

  fo() {
    const greeting = 'hola';

    const fo2 = function () {
      const greeting = 'hello';

      const arrowFo = () => {
        console.log(this.greeting);
      };

      arrowFo();
    };
    fo2.call(this) // Use this instead of fo2()
  },
};

// function borrowing

// https://medium.com/@ensallee/function-borrowing-in-javascript-4bd671e9d7b4

class Dog {
    constructor(name, age, breed) {
      this.name = name
      this.age = age
      this.breed = breed
    }
    tellUsAboutYourSelf() {
      return `My name is ${this.name}. I am a ${this.breed} and I am ${this.age} years old.`
    }
  
    woof() {
      return "WOOF!!!"
    }
  }
  
  let fido = new Dog("Fido", 3, "dachshund")
  fido.tellUsAboutYourSelf()
  //=> 'My name is Fido. I am a dachshund and I am 3 years old.'