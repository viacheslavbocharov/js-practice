
// function isRealNaN(v) {
//   if (Object.is(v, NaN)) {
//     return true;
//   }
//   return false;
// }

// console.log(isRealNaN(Number('12b')));

// function makeCounter() {
//   let counter = 0;
//   return function () {
//     return (counter += 1);
//   };
// }

// const c1 = makeCounter();
// const c2 = makeCounter();
// console.log(c1())
// console.log(c1())
// console.log(c2())

// console.log(Boolean([]))

// let sayHi;

// if (true) {
//   sayHi = function() {
//     console.log("la".repeat(3));
//   };
// }

// sayHi();

// const user = {
//   name: "Slava",
//   sayHi: () => console.log(this.name)
// };

// user.sayHi();

// const user2 = {
//   name: "Slava",
//   sayHi: function () {
//     console.log(this.name);
//   }
// };
// user2.sayHi();

// function showArgs(a, b) {
//   console.log(arguments[0]);
//   console.log(arguments);
// }
// showArgs(1, 2, 3);

// function foo() {
//   console.log(this);
// }
// foo();

// const user = {
//   name: 'Slava',
//   greet() {
//     setTimeout(
//       function () {
//         console.log(this.name);
//       }.bind(this),
//       1000
//     );
//   },
// };
// user.greet();

// function showThis() {
//   console.log(this);
// }
// const user = { name: "Slava", show: showThis };
// user.show();

// const admin = { name: "Admin" };
// showThis.call(admin);
global.name = "Slava";

const user = {
  name: "Slava",
  show: () => console.log(this.name)
};

user.show();
console.log(global.name)