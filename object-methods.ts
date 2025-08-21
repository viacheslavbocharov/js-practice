// type User = {
//   name: string;
//   age?: number;
// };

// const user: User = {
//   name: 'Slava',
//   age: 34,
// };

// delete user.age;
// console.log(user);

// type Admin = {
//   role?: string;
// };

// type AdminUser = User & Admin;

// const admin: AdminUser = {
//   name: 'Slava',
//   age: 37,
// };
// admin.role = 'admin';
// console.log(admin);

// const user = {
//   name: 'Slava',
//   age: 34,
// };

// const admin = {
//   age: 37,
//   role: 'admin',
//   printRole() {
//     console.log(this.role);
//   },
// };

// const userAdmin = Object.assign(user, admin);
// console.log(userAdmin);

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const newObj = Object.assign({}, target, source, {name: user.name});
// const newObj2 = {...target, ...source}
// console.log(newObj)
// console.log(target)
// console.log(newObj === target);
// console.log(newObj === newObj2);

// const person = {
//   name: 'Skava',
//   isHuman: false,
//   printIntroduction() {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   },
// };

// const me = Object.create(person);
// me.name = "Slava"
// me.printIntroduction()
// console.log(me)
// console.log(me === person)

// for (let key in me) {
//   console.log(key); // name, isHuman, printIntroduction
// }

//======
//entries()
// const object = {
//   a: 'some string',
//   b: 42,
// };

// for (const [key, value] of Object.entries(object)) {
//   console.log(`${key}: ${value}`);
// }

// console.log(Object.entries(object));

//===================
// object.keys()
// const object = {
//   a: "some string",
//   b: 42,
//   c: false,
// };

// console.log(Object.keys(object)); // Expected output: Array ["a", "b", "c"]

//===============
// Object.values()
// const object = {
//   a: "some string",
//   b: 42,
//   c: false,
// };

// console.log(Object.values(object));
// // Expected output: Array ["some string", 42, false]
// console.log(Math.floor(Math.random() * 1000))

// const user = { name: 'Slava', age: 34, city: 'Belfast' };
// console.log(Object.keys(user).length);

// const salaries = { John: 1000, Alice: 1200, Bob: 800 };
// console.log(Object.values(salaries).reduce((acc, val) => (acc += val)));

// const colors = { red: '#FF0000', green: '#00FF00', blue: '#0000FF' };

// console.log(Object.entries(colors).flat().indexOf('#00FF00') - 1);
// console.log(
//   Object.entries(colors).find((el) => (el[1] === '#00FF00'))?.[0]
// );

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// Object.assign(obj1, obj2)
// console.log(obj1)

// const user = {
//     name: 'Slava',
//     age: 37
// }

// const newUser = {...user}
// // const newUser = Object.assign({}, user)
// // const newUser = JSON.parse(JSON.stringify(user))
// newUser.age = 20
// console.log(newUser)
// console.log(user)

// const data = { a: 10, b: 5, c: 20, d: 3 };
// console.log(Object.fromEntries(Object.entries(data).filter((el => el[1] > 5))))

// const roles = { admin: 1, user: 2, guest: 3 };
// console.log(
//   Object.fromEntries(Object.entries(roles).map((el) => el.reverse()))
// );

// const product = { id: 10, name: 'Laptop', price: 1200 };

// const { name, price } = product;
// console.log(name, price);

// const profile = { name: 'Slava', city: 'Belfast' };
// const newProfile = {
//   ...profile,
//   age: 34,
// };
// console.log(newProfile)

// const scores = { Alice: 10, Bob: 15, John: 5 };
// console.log(Object.entries(scores).sort((a,b) => a[1] - b[1]))

//=============
// console.log(Math.floor(Math.random() * 10))

// const nums = [3, 7, 1, 9, 4];

// console.log(Math.min(...nums))
// console.log(Math.max(...nums))

// const nums = [4, 7, 10];
// console.log(Math.round(nums.reduce((acc, num) => (acc += num)) / nums.length));

// console.log(Math.pow(2, 8))
// console.log(3.14159.toFixed(2))

// const fruits = ['apple', 'banana', 'cherry'];
// const randomIndex = Math.round(Math.random() * fruits.length);
// console.log(fruits[randomIndex]);

// console.log(Math.abs(10 - 27))

// console.log(Math.floor(Math.PI*5))

// console.log(Math.floor(Math.random() * 6) + 1);
