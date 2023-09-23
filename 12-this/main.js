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