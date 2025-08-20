// const arr = Array(10);
// console.log(arr);

// const arr2 = Array.from([0, 1, 2, 3, 4, 5]);
// console.log(arr2);

// console.log(Array(5));
// console.log(Array.of(5));

// const mixed = [1, 'abc', [2, 3], { x: 10 }, ['a', 'b']];

// const arrOfarrays = mixed.filter(Array.isArray);
// console.log(arrOfarrays);

// arr2.length = 3;
// console.log(arr2);

// const arrSquare = Array.from({ length: 7 }, (_, i) => i ** 2);
// console.log(arrSquare);

// console.log(Array.from('hello'));
// console.log('hello'.split(''));

// function checkType(value: any[]) {
//   if (Array.isArray(value)) {
//     return console.log('Array');
//   }

//   return console.log('Not array');
// }

// checkType([1, 2, 3])

// checkType("123")

// checkType({ length: 3 })
// const arr3 = Array.of<number | string>(2, 3, 'test');
// arr3.length = 0
// console.log(arr3);

//=================
// const numbers = [10, 20, 30, 40, 50];
// console.log(numbers.at(0));
// console.log(numbers.at(-1));
// console.log(numbers.at(10));

// function getElement(arr: number[], index: number) {
//   const value = arr.at(index);
//   return value === undefined ? 'Not fouond' : value;
// }
// console.log(getElement([1, 2, 3], 1));
// console.log(getElement([1, 2, 3], 10));
// console.log(getElement([1, 2, 3], -1));

// const colors = ["red", "green", "blue"];
// // const colorsCopy = colors.slice().with(1, 'yellow')
// // const colorsCopy = Array.from(colors).with(1, 'yellow')
// const colorsCopy = [...colors].with(1, 'yellow')
// console.log(colorsCopy)
// console.log(colors)

// const arrNums = [100, 200, 300, 400]
// const arrNumsCopy = arrNums.slice().with(0, 999)
// console.log(arrNums)
// console.log(arrNumsCopy)

// const fruits = ["apple", "banana"]
// fruits.push('kiwi')
// fruits.unshift('pinapple')
// fruits.shift()
// console.log(fruits)

// const numbers = [10, 20, 30, 40]
// numbers.pop()
// numbers.length = numbers.length - 1
// console.log(numbers)

// const months = ["Jan", "March", "April", "June"]
// months.splice(1, 0, "Feb")
// console.log(months)

// const colors = ["red", "green", "blue"]
// colors.splice(1, 1, 'yellow')
// console.log(colors)

// const numbers = [1, 2, 3, 4, 5, 6]
// numbers.splice(2, 3)
// console.log(numbers)

// const letters = ["a", "b", "c", "d", "e"]
// letters.splice(2, 2, "X", "Y", "Z")
// console.log(letters)
// const a = [1, 2];
// const b = [3, 4];
// const c = [5, 6];

// // const newArr = Array().concat(a,b,c)
// // const newArr = [...a, ...b, ...c]
// // const newArr = a.concat(b,c)
// const newArr: number[] = ([] as number[]).concat(a,b,c)
// console.log(newArr)

// const letters = ["a", "b", "c"];
// const newLettrs = letters.concat('d', ['e', 'f'])
// console.log(newLettrs)

// const numbers = [10, 20, 30, 40, 50];
// const newNumbers = numbers.slice(-2);
// console.log(newNumbers);
// console.log(numbers.slice(1, 4))

// const arr = ['a', 'b', 'c', 'd', 'e'];
// const newArr = arr.copyWithin(1, 3, 4);
// console.log(newArr);

// const arr = Array(5).fill(0)
// console.log(arr)

// const arr = Array.from({length: 5}, (_, i) => i + 1).fill(9, 1, 4)
// console.log(arr)

// const fruits = ["apple", "banana", "orange"]
// console.log(fruits.includes('banana'))
// console.log(fruits.indexOf('banana'))

// const letters = ["a", "b", "c", "a", "d"]
// console.log(letters.lastIndexOf('a'))

// const numbers = [5, 12, 8, 130, 44]
// let res = numbers.find((el) => el > 10)
// console.log(res)
// console.log(numbers.findIndex((el) => el > 100))
// console.log(numbers.findLastIndex((el) => el > 40))

// const numbers = [1, 3, 5, 7, 9];
// console.log(numbers.some((num) => num % 2 === 0));

// const numbers = [2, 4, 6, 8];
// console.log(numbers.every((num) => num % 2 === 2));

// const users = [
//   { name: 'Alice', age: 17 },
//   { name: 'Bob', age: 20 },
//   { name: 'Charlie', age: 22 },
// ];

// console.log(users.find((user) => user.age > 18))
// console.log(users.some((user) => user.age < 18))
// console.log(users.every((user) => user.age > 15))
//=====================
// const numbers: number[] = [1, 2, 3, 4, 5];
// const mulArr: number[] = numbers.map((num) => num * 2);
// console.log(mulArr);

// const words = ['hello', 'world', 'js'];
// // const capitalisedWords = words.map((word) =>
// //   word.slice(0, 1).toUpperCase().concat(word.slice(1))
// // );
// const capitalisedWords = words.map(
//   (word) => word.at(0)?.toUpperCase() + word.slice(1)
// );
// console.log(capitalisedWords);

// const ages = [12, 25, 18, 30, 15];
// console.log(ages.filter((num) => num >= 18));

// const fruits = ['apple', 'banana', 'grape', 'mango'];
// console.log(fruits.filter((el) => el.includes('g')));

// const arr = [1, 2, 3];
// console.log(arr.flatMap((el) => [el, el * 2]));

// const numbers: number[] = [1, 2, 3, 4, 5];
// console.log(numbers.reduce((acc, num) => acc + num));

// const numbers: number[] = [10, 50, 30, 70, 40];
// console.log(
//   numbers.reduce(
//     (acc: number, num: number) => (num > acc ? (acc = num) : acc),
//     numbers[0]!
//   )
// );

// const str: string[] = ['a', 'b', 'c', 'd'];
// console.log(
//   str.reduceRight((acc: string, char: string) => acc + char),
//   ''
// );

// const numbers: number[] = [1, 2, 3, 4, 5, 6];
// console.log(
//   numbers
//     .filter((num) => num % 2 === 0)
//     .map((num) => num * 10)
//     .reduce((acc, num) => acc + num, 0)
// );

// const data = [
//   { name: "Alice", scores: [10, 20] },
//   { name: "Bob", scores: [15, 25] },
// ];

// console.log(data.flatMap(el => el.scores))

// const letters = ['a', 'b', 'c', 'd'];
// letters.reverse()
// console.log(letters);

// const nums = [1, 2, 3, 4, 5]
// const revNums = nums.toReversed()
// console.log(nums)
// console.log(revNums)

// const words = ["banana", "apple", "cherry"]
// words.sort()
// console.log(words)

// const numbers = [10, 1, 21, 2];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// const arr = [50, 20, 10, 40, 30];
// const sortArr = arr.toSorted((a, b) => a - b);
// console.log(sortArr);
// console.log(arr);

// const cities = ["Paris", "London", "New York", "Berlin"]
// cities.sort().reverse()
// console.log(cities)

// const fruits = ["apple", "kiwi", "banana", "pear"]
// fruits.sort((a, b) => a.length - b.length)
// console.log(fruits)

// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 18 },
//   { name: 'Charlie', age: 30 },
// ];
// users.sort((a, b) => a.age - b.age);
// console.log(users);

// const nums = [5, 3, 8, 1, 2]
// console.log(nums.sort((a,b) => b - a))

// const arr = [1, [2, 3], 4];
// console.log(arr.flat())

// const arr = [1, [2, [3, [4]]]];
// console.log(arr.flat(2));

// const arr = [1, [2, [3, [4]]]]
// console.log(arr.flat(Infinity))

// const arr = [1, 2, 3];
// console.log(arr.flatMap((x) => [x, x * 2]));

// const words = ['hello world', 'foo bar'];
// console.log(words.flatMap((el) => el.split(' ')));
//========================

// const numbers = [1, 2, 3, 4];
// numbers.forEach((el, i) => console.log(`el: ${el}, inxex: ${i}`));

// const fruits: string[] = ['apple', 'banana', 'cherry'];
// function foo(arr: string[]): string {
//   let res = '';
//   arr.forEach((el, i) => (res += `Index ${i}: ${el}, `));
//   return res.slice(0, -2);
// }
// console.log(foo(fruits));
// console.log(
//   fruits.reduce((acc, el, i) => (acc += `Index ${i}: ${el}, `), '').slice(0, -2)
// );

// const letters = ['a', 'b', 'c'];
// for (const element of letters.keys()) {
//   console.log(element);
// }
// Array.from(letters.values()).forEach((val) => console.log(val));

// const letters = ['a', 'b', 'c'];
// for (const el of letters.entries()) {
//   console.log(el);
// }
// Array.from(letters.entries()).forEach( el => console.log(el))

// const colors = ['red', 'green', 'blue'];
// for (const [i, el] of colors.entries()) {
//   console.log(`${i}: ${el}`);
// }

// const arr = [10, 20, 30]
// const iterator = arr.values()
// console.log(iterator.next().value)
// console.log(iterator.next())

// const arr = [1, , 3];
// arr.forEach((el) => console.log(el));
// for (const element of arr) {
//   console.log(element);
// }

// const users = [
//   { name: "Alice", hobbies: ["reading", "sports"] },
//   { name: "Bob", hobbies: ["gaming"] }
// ];

// console.log(users.flatMap(el => el.hobbies))

// let res: string[] = [];
// for (const user of users) {
//     res = res.concat(user.hobbies)
// }
// console.log(res)

// const arr: number[] = [1, 2, 3, 4];
// console.log(arr.toString());

// const fruits: string[] = ['apple', 'banana', 'cherry'];
// console.log(fruits.join(', ').concat('...'));

// const chars: string[] = ['J', 'S'];
// console.log(chars.join(''));

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// console.log(matrix.toString())
// console.log(matrix.join(';'))