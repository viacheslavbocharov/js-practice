// =========разряженный массив

// const arr: string[] = ['abc', '123', 'lala']
// console.log(arr[1])
// console.log(arr['1'])
// console.log(arr.length)
// arr[5] = 'blabalbla'
// console.log(Object.keys(arr))
// console.log(arr.length)
// arr.length = 8
// console.log(arr.length)
// arr.forEach(el => console.log(el))
// console.log(Object.keys(arr))
// arr.length = 3
// console.log(Object.keys(arr))

//=====================
//Array() constructor

// const arrEmpty = Array(5)
// console.log(arrEmpty)
// console.log(arrEmpty.length)

// const arrOfOne = new Array('5')
// console.log(arrOfOne)
// console.log(arrOfOne.length)

// const fruits = new Array('apple', 'banana')
// console.log(fruits)
// console.log(fruits.length)

//==================
//Array.from()

// const arr2 = Array.from([1, 2, 3], (el, index) => el + index);
// console.log(arr2)

//===============
//Array.isArray()

// console.log(Array.isArray([]))
// console.log(Array.isArray(new Array(3)))
// console.log(Array.isArray('abc'))

// const mixed = [1, 'a', [2, 3], { name: 'John' }];
// const arraysOnly = mixed.filter(Array.isArray);
// console.log(arraysOnly); // [ [2, 3] ]

//====================
// Array.of()

// console.log(Array.of(7)); //отдичие от Array(7) - создаст массив из 7 пустых слотов
// console.log(Array.of([1, 2])); //создаст массив с вложенным массивом[ [ 1, 2 ] ]б в отличии от Array.from([1,2])

//=== Array: length==============

// const clothing = ["shoes", "shirts", "socks", "sweaters"];
// console.log(clothing.length);

// const numbers = [];
// numbers.length = 3;
// console.log(numbers); // [empty x 3]

// "use strict";

// const numbers2 = [1, 2, 3, 4, 5];
// Object.defineProperty(numbers, "length", { writable: false });
// numbers2[5] = 6; // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
// numbers.push(5); // // TypeError: Cannot assign to read only property 'length' of object '[object Array]'

//=============================
// at()
//The at() method of Array instances takes an integer value and returns the item at that index, allowing
// for positive and negative integers. Negative integers count back from the last item in the array.
// const arr3 = [5, 12, 8, 130, 44];
// console.log(arr3.at(2)); //8
// console.log(arr3.at(-1)); //44
// console.log(arr3.at(10)); //undefined

//=================
//concat()
//The concat() method of Array instances is used to merge two or more arrays. This method does not change the
// existing arrays, but instead returns a new array.
// const arr1: number[] = [1, 2];
// const arr2: number[] = [3, 4];
// const arr3: number[] = [5, 6];
// console.log(arr1.concat(arr2, arr3)); //[ 1, 2, 3, 4, 5, 6 ]
// console.log(Array.prototype.concat(arr1, arr2, arr3)); //[ 1, 2, 3, 4, 5, 6 ]

// const letters: (number | string)[] = ['a', 'b', 'c'];
// console.log(letters.concat(1, ['d', 'e'])); //[ 'a', 'b', 'c', 1, 'd', 'e' ]

// const arr4: (number | number[])[] = [[1]];
// const arr5: (number | number[])[] = [2, [3]];
// const arrNums: (number | number[])[] = arr4.concat(arr5);
// console.log(arrNums);
// if (Array.isArray(arr4[0])) arr4[0].push(4);

//============================
// copyWithin()
//The copyWithin() method of Array instances shallow copies part of this array to another location in the same array
// and returns this array without modifying its length.
//copyWithin(target, start, end)
// const arr6: string[] = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr6.copyWithin(0, 3, 4)); //["d", "b", "c", "d", "e"]
// console.log(arr6.copyWithin(1, 3)); // ["d", "d", "e", "d", "e"]
// console.log([1, 2, 3, 4, 5].copyWithin(2, 0)); //[ 1, 2, 1, 2, 3 ]
// console.log([1, 2, 3, 4, 5].copyWithin(0, 3)); //[4, 5, 3, 4, 5]
// console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4)); // [4, 2, 3, 4, 5]
// console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1)); // [1, 2, 3, 3, 4]
// console.log([1, , 3].copyWithin(2, 1, 2)); // [1, empty, empty]
// function test(...args: string[]): void {
//   console.log(arguments); // {0: 'a', 1: 'b', 2: 'c', length: 3}
//   Array.prototype.copyWithin.call(arguments, 1, 0);
//   console.log(arguments); // {0: "a", 1: "a", 2: "b", length: 3}
// }
// test('a', 'b', 'c');

//=============================
//entries()
//The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for
// each index in the array.
// const arr6: string[] = ['a', 'b', 'c']
// const iterator = arr6.entries()
// console.log(iterator.next().value)
// for (const [index, element] of iterator) {
//   console.log(index, element);
// }

//===========================
//every()
//The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided
//function. It returns a Boolean value.
// every(callbackFn)
// every(callbackFn, thisArg)
// function isBigEnough(element: number, index: number, array: number[]): boolean {
//   console.log(array[index]);
//   return element >= 10;
// }
// [12, 5, 8, 130, 44].every(isBigEnough); // false

// const numbers = [-2, 4, -8, 16, -32];
// const isIncreasing = numbers
//   .filter((num) => num > 0)
//   .every((num, idx, arr) => {
//     if (idx === 0) return true;
//     return num > arr[idx - 1];
//   });
// console.log(isIncreasing); // true

// console.log([1, , 3].every((x) => x !== undefined)); // true
// console.log([2, , 2].every((x) => x === 2)); // true

//==========================
//fill()
//fill(value, start, end)
//The fill() method of Array instances changes all elements within a range of indices in an array to a static value.
//It returns the modified array.

// const array = [1, 2, 3, 4];
// // Fill with 0 from position 2 until position 4
// console.log(array.fill(0, 2, 4));
// // Expected output: Array [1, 2, 0, 0]
// // Fill with 5 from position 1
// console.log(array.fill(5, 1));
// // Expected output: Array [1, 5, 5, 5]
// console.log(array.fill(6));
// // Expected output: Array [6, 6, 6, 6]
// console.log([1, 2, 3].fill(4)); // [4, 4, 4]
// console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
// console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
// console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
// console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
// console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
// console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
// console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
// console.log(Array(3).fill(4)); // [4, 4, 4]

// // A single object, referenced by each slot of the array:
// const arr = Array(3).fill({}); // [{}, {}, {}]
// arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]

// const arrayLike = { length: 2 };
// console.log(Array.prototype.fill.call(arrayLike, 1));
// // { '0': 1, '1': 1, length: 2 }

//======================
// filter()
//The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just
// the elements from the given array that pass the test implemented by the provided function.
// filter(callbackFn)
// filter(callbackFn, thisArg)
// const words = ["spray", "elite", "exuberant", "destruction", "present"];
// const result = words.filter((word) => word.length > 6); // Expected output: Array ["exuberant", "destruction", "present"]

// function isBigEnough(value) {
//   return value >= 10;
// }
// const filtered = [12, 5, 8, 130, 44].filter(isBigEnough); // filtered is [12, 130, 44]

// const fruits = ["apple", "banana", "grapes", "mango", "orange"];
// function filterItems(arr, query) {
//   return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
// }
// console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
// console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']

//========================
//find()
// The find() method of Array instances returns the first element in the provided array that satisfies the provided
// testing function. If no values satisfy the testing function, undefined is returned.
// find(callbackFn)
// find(callbackFn, thisArg)
// const array = [5, 12, 8, 130, 44];
// const found = array.find((element) => element > 10);
// console.log(found);

//===================
//findIndex()
// The findIndex() method of Array instances returns the index of the first element in an array that satisfies
// the provided testing function. If no elements satisfy the testing function, -1 is returned.
// const array: number[] = [5, 12, 8, 130, 44];
// const isLargeNumber = (element: number): boolean => element > 13;
// console.log(array.findIndex(isLargeNumber)); // Expected output: 3 (number 130)

// console.log([1, , 3].findIndex((x) => x === undefined)); // 1

//=======================
// findLast()
// The findLast() method of Array instances iterates the array in reverse order and returns the value of the
// first element that satisfies the provided testing function. If no elements satisfy the testing function,
// undefined is returned.
// findLast(callbackFn)
// findLast(callbackFn, thisArg)
// const array: number[] = [5, 12, 50, 130, 44];
// const found = array.findLast((element: number) => element > 45);
// console.log(found);// Expected output: 130

//=======================
// findLastIndex()
// The findLastIndex() method of Array instances iterates the array in reverse order and returns the index
// of the first element that satisfies the provided testing function.
// If no elements satisfy the testing function, -1 is returned.
// findLastIndex(callbackFn)
// findLastIndex(callbackFn, thisArg)
// const array: number[] = [5, 12, 50, 130, 44];
// const isLargeNumber = (element: number) => element > 45;
// console.log(array.findLastIndex(isLargeNumber)); // Expected output: 3 // Index of element with value: 130

//========================
// flat()
//The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively
//up to the specified depth.
// flat(depth)

// const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());// expected output: Array [0, 1, 2, 3, 4]

// const arr2 = [0, 1, [2, [3, [4, 5]]]];
// console.log(arr2.flat());// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

// console.log(arr2.flat(2));// expected output: Array [0, 1, 2, 3, Array [4, 5]]

// console.log(arr2.flat(Infinity));// expected output: Array [0, 1, 2, 3, 4, 5]

//============================
// flatMap()
//The flatMap() method of Array instances returns a new array formed by applying a given callback function
// to each element of the array, and then flattening the result by one level.
// It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()),
// but slightly more efficient than calling those two methods separately.
// const arr = [1, 2, 1];
// const result = arr.flatMap((num) => (num === 2 ? [2, 2] : 1));
// console.log(result); // Expected output: Array [1, 2, 2, 1]

//=======================
// forEach()
//The forEach() method of Array instances executes a provided function once for each array element.
// const array = ["a", "b", "c"];
// array.forEach((element) => console.log(element));

//======================
// includes()
//The includes() method of Array instances determines whether an array includes a certain value among its entries,
// returning true or false as appropriate.
// includes(searchElement, fromIndex)
// const array = [1, 2, 3];
// console.log(array.includes(2));// Expected output: true

// const pets = ["cat", "dog", "bat"];
// console.log(pets.includes("cat"));// Expected output: true
// console.log(pets.includes("at"));// Expected output: false

// [1, 2, 3].includes(2); // true
// [1, 2, 3].includes(4); // false
// [1, 2, 3].includes(3, 3); // false
// [1, 2, 3].includes(3, -1); // true
// [1, 2, NaN].includes(NaN); // true
// ["1", "2", "3"].includes(3); // false

// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97
// const arr = ["a", "b", "c"];
// arr.includes("a", -100); // true
// arr.includes("b", -100); // true
// arr.includes("c", -100); // true
// arr.includes("a", -2); // false

//================
// indexOf()
//The indexOf() method of Array instances returns the first index at which a given element can be found in the array,
// or -1 if it is not present.
// indexOf(searchElement, fromIndex)

// const beasts = ["ant", "bison", "camel", "duck", "bison"];

// console.log(beasts.indexOf("bison")); // Expected output: 1

// // Start from index 2
// console.log(beasts.indexOf("bison", 2)); // Expected output: 4

// console.log(beasts.indexOf("giraffe"));// Expected output: -1

//========================
// join()
// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array,
// separated by commas or a specified separator string. If the array has only one item,
// then that item will be returned without using the separator.
// const elements = ["Fire", "Air", "Water"];
// console.log(elements.join()); // Expected output: "Fire,Air,Water"
// console.log(elements.join("")); // Expected output: "FireAirWater"
// console.log(elements.join("-")); // Expected output: "Fire-Air-Water"

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
// console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9

//=======================
// keys()
//The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.
// const array = ["a", "b", "c"];
// const iterator = array.keys();

// for (const key of iterator) {
//   console.log(key);
// }

// // Expected output: 0
// // Expected output: 1
// // Expected output: 2

//=====================
// lastIndexOf()
// The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array,
// or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// lastIndexOf(searchElement, fromIndex)
// const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
// console.log(animals.lastIndexOf("Dodo"));// Expected output: 3

// const numbers = [2, 5, 9, 2];
// numbers.lastIndexOf(2); // 3
// numbers.lastIndexOf(7); // -1
// numbers.lastIndexOf(2, 3); // 3
// numbers.lastIndexOf(2, 2); // 0
// numbers.lastIndexOf(2, -2); // 0
// numbers.lastIndexOf(2, -1); // 3

//==================
//map()
//The map() method of Array instances creates a new array populated with the results of calling a provided
// function on every element in the calling array.
//map(callbackFn, thisArg)
// const array = [1, 4, 9, 16];
// const mapped = array.map((x) => x * 2);
// console.log(mapped); // Expected output: Array [2, 8, 18, 32]

//========================
//pop()
//The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.
// const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
// console.log(plants.pop()); // Expected output: "tomato"
// console.log(plants); // Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

//====================
//push()
// The push() method of Array instances adds the specified elements to the end of an array and returns
// the new length of the array.
//push(element1, element2, /* …, */ elementN)
// const animals = ['pigs', 'goats', 'sheep'];
// const count = animals.push('cows', 'horse');
// console.log(animals); // [ 'pigs', 'goats', 'sheep', 'cows', 'horse' ]
// console.log(count); // Expected output: 4

// const vegetables = ["parsnip", "potato"];
// const moreVegs = ["celery", "beetroot"];
// // Merge the second array into the first one
// vegetables.push(...moreVegs);

//===========================
// reduce()
// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array,
//  in order, passing in the return value from the calculation on the preceding element.
//  The final result of running the reducer across all elements of the array is a single value.
// const array = [1, 2, 3, 4];
// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );
// console.log(sumWithInitial); // Expected output: 10

//========================
// reduceRight()
// The reduceRight() method of Array instances applies a function against an accumulator and each value of the
// array (from right-to-left) to reduce it to a single value.
// const array = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ];
// const result = array.reduceRight((accumulator, currentValue) =>
//   accumulator.concat(currentValue)
// );
// console.log(result); // Expected output: Array [4, 5, 2, 3, 0, 1]

//=======================
//reverse()
//The reverse() method of Array instances reverses an array in place and returns the reference to the same array,
//the first array element now becoming the last, and the last array element becoming the first.
// const array = ["one", "two", "three"];
// const reversed = array.reverse(); //["three", "two", "one"]

//===============================
// shift()
// The shift() method of Array instances removes the first element from an array and returns that removed element.
//  This method changes the length of the array.
// const array = [1, 2, 3];
// const firstElement = array.shift();
// console.log(array);// Expected output: Array [2, 3]
// console.log(firstElement);// Expected output: 1

//=============================
//slice()
// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object
// selected from start to end (end not included) where start and end represent the index of items in that array.
// The original array will not be modified.
//slice(start, end)
// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));// Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));// Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));// Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));// Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));// Expected output: Array ["camel", "duck"]

// console.log(animals.slice());// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

//============================
//some()
//The some() method of Array instances tests whether at least one element in the array passes the test implemented
// by the provided function. It returns true if, in the array, it finds an element for which the provided
// function returns true; otherwise it returns false. It doesn't modify the array.
// const array: number[] = [1, 2, 3, 4, 5];
// // Checks whether an element is even
// const even = (element: number) => element % 2 === 0;
// console.log(array.some(even)); // Expected output: true

// function isBiggerThan10(element: number, index: number, array: number[]): boolean {
//   return element > 10;
// }

// [2, 5, 8, 1, 4].some(isBiggerThan10); // false
// [12, 5, 8, 1, 4].some(isBiggerThan10); // true

//=====================
//sort()
//The sort() method of Array instances sorts the elements of an array in place and returns the reference
// to the same array, now sorted. The default sort order is ascending, built upon converting the elements
// into strings, then comparing their sequences of UTF-16 code unit values.
// const months = ["March", "Jan", "Feb", "Dec"];
// months.sort();
// console.log(months);// Expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array = [1, 30, 4, 21, 100000];
// array.sort();

//============================
//splice()
//The splice() method of Array instances changes the contents of an array by removing or replacing existing
// elements and/or adding new elements in place.
//splice(start, deleteCount, item1, item2, /* …, */ itemN)
// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, "Feb");
// // Inserts at index 1
// console.log(months);// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, "May");
// // Replaces 1 element at index 4
// console.log(months);// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

//========================
// toReversed()
//The toReversed() method of Array instances is the copying counterpart of the reverse() method. It returns a new array with the elements in reversed order.

//toSorted()
//toSpliced()

//================
// toString()
// const array = [1, 2, "a", "1a"];
// console.log(array.toString());// Expected output: "1,2,a,1a"

//=============
// unshift()
//The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
// const array = [1, 2, 3];
// console.log(array.unshift(4, 5));// Expected output: 5
// console.log(array);// Expected output: Array [4, 5, 1, 2, 3]

//==============
// values()
//The values() method of Array instances returns a new array iterator object that iterates the value of each item in the array.
// const array = ["a", "b", "c"];
// const iterator = array.values();

// for (const value of iterator) {
//   console.log(value);
// }
// // Expected output: "a"
// // Expected output: "b"
// // Expected output: "c"

// const arr = ['a', 'b', 'c', 'd', 'e'];
// const iterator = arr.values();
// console.log(iterator.next()); // { value: "a", done: false }
// console.log(iterator.next().value); // b
// iterator.next(); // { value: "c", done: false }
// iterator.next(); // { value: "d", done: false }
// iterator.next(); // { value: "e", done: false }
// iterator.next(); // { value: undefined, done: true }
// console.log(iterator.next().value); // undefined

//==================
//with()
//The with() method of Array instances is the copying version of using the bracket notation to change the
//value of a given index. It returns a new array with the element at the given index replaced with the given value.
//arrayInstance.with(index, value)
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
// console.log(arr); // [1, 2, 3, 4, 5]

//======================
//apply()
//The apply() method of Function instances calls this function with a given this value, and arguments provided as an array (or an array-like object).
// apply(thisArg, argsArray)
// const numbers = [5, 6, 2, 3, 7];
// const max = Math.max.apply(null, numbers);
// console.log(max);// Expected output: 7

// function greet(g1, g2) {
//   console.log(`${g1} ${this.name} ${g2}`);
// }

// const user = { name: "Slava" };

// greet.call(user, "Hi", "!");      // Hi Slava !
// greet.apply(user, ["Hello", "?"]); // Hello Slava ?

//===========================
//call()
//The call() method of Function instances calls this function with a given this value and arguments provided individually
//call(thisArg, arg1, arg2, /* …, */ argN)

// function greet() {
//   console.log(this.animal, "typically sleep between", this.sleepDuration);
// }

// const obj = {
//   animal: "cats",
//   sleepDuration: "12 and 16 hours",
// };

// greet.call(obj); // cats typically sleep between 12 and 16 hours

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = "food";
// }

// console.log(new Food("cheese", 5).name);// Expected output: "cheese"

//================================
//bind()
//The bind() method of Function instances creates a new function that, when called, calls this function with
// its this keyword set to the provided value, and a given sequence of arguments preceding any provided
// when the new function is called.
// function greet(greeting, sign) {
//   console.log(greeting, this.name, sign);
// }

// const user = { name: "Slava" };

// const sayHi = greet.bind(user, "Hi");
// sayHi("!"); // Hi Slava !
