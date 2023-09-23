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

