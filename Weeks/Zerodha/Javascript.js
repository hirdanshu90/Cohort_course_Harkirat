// class Animal {
//   constructor(name, legs, speaks) {
//     this.name = name;
//     this.legs = legs;
//     this.speaks = speaks;
//   }

//   static myType() {
//     console.log("printing from static");
//   }
//   speak() {
//     console.log("hi there " + this.speaks);
//   }
// }

// let dog = new Animal("Dog", 4, "bhow");
// let cat = new Animal("Cat", 4, "meow");

// Animal.myType();
// cat.speak();

// const user = {
//   name: 'John',
//   age: 34,
//   gender: 'male',
//   work: 'doctor'
// }

// const finalString = JSON.stringify(user);
// console.log(finalString);

// function findSum(n) {
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     ans += i;
//   }
//   return ans;
// }

// setTimeout(() => {
//   console.log(findSum(10));
// }, 1000);

// console.log("Hello world");

// const fs = require("fs");

// fs.readFile("a.txt", "utf8", function(err,data){
//   console.log(data);
// });

// console.log("Hello world");

var d = new Promise(function (resolve) {
  resolve();
});

console.log(d)

