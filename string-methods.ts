let word = 'mozilla';
console.log('cat'.charAt(1));
console.log(word.charAt(1));

const a: string = 'a';
const b: string = 'b';
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}

function areStrEqual(str1: string, str2: string): boolean {
  return str1.toLowerCase() === str2.toLowerCase();
}

console.log(areStrEqual('lala', 'blabla'));

const filePath = String.raw`C:\Development\profile\about.html`;
console.log(`The file was uploaded from: ${filePath}`);
//String.prototype.charAt()
//Returns the character (exactly one UTF-16 code unit) at the specified index. Accepts negative integers, which count back from the last string character.
console.log('String.prototype.charAt()');
console.log(word.at(-1));

//String.prototype.charCodeAt()
//Returns the character (exactly one UTF-16 code unit) at the specified index.console.log("String.prototype.charCodeAt()")
console.log(word.charAt(0));

//String.prototype.codePointAt()
//Returns a number that is the UTF-16 code unit value at the given index.
console.log('String.prototype.codePointAt()');
console.log(word.charCodeAt(0));

//String.prototype.concat()
console.log('String.prototype.concat()');
console.log(word.concat(' is a browser', '!'));
let newStr = String.prototype.concat(word, '!');
console.log(newStr);

//String.prototype.endsWith()
//This method lets you determine whether or not a string ends with another string. This method is case-sensitive.
console.log('String.prototype.endsWith()');
let str2 = 'To be, or not to be, that is the question.';
console.log(str2.endsWith('question.'));
console.log(str2.endsWith('to be', 19));

//String.prototype.includes()
// The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.
//The position within the string at which to begin searching for searchString. (Defaults to 0.)
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log('String.prototype.includes()');
console.log(sentence.includes('fox'));
console.log(sentence.includes('Fox'));
console.log(sentence.includes('fox', 5));

//String.prototype.indexOf()
//The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.
console.log('String.prototype.indexOf()');
const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph.indexOf('dog')); //15
console.log(paragraph.indexOf('dog', 16)); //38

//String.prototype.lastIndexOf()
//The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring. It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.
console.log('String.prototype.lastIndexOf()');
console.log(paragraph.lastIndexOf('dog')); //38

//String.prototype.match()
//The match() method of String values retrieves the result of matching this string against a regular expression.
console.log('String.prototype.match()');
let text = 'I have 2 apples and 3 bananas';
console.log(text.match(/\d+/)); // без 'g', output - ["2", index: 7, input: "I have 2 apples and 3 bananas", groups: undefined]
console.log(text.match(/\d+/g)); // ["2", "3"]

//String.prototype.matchAll()
console.log('String.prototype.matchAll()');
//The matchAll() method of String values returns an iterator of all results matching this string against a regular expression, including capturing groups.
let text2 = 'I have 2 apples and 3 bananas';
let regex = /\d+/g;
for (const match of text2.matchAll(regex)) {
  console.log(match);
}

//String.prototype.padEnd()
//The padEnd() method of String values pads this string with a given string (repeated and/or truncated, if needed) so that the resulting string has a given length. The padding is applied from the end of this string.
let str3 = '';
console.log(str3.padEnd(6, 'la')); //lalala

//String.prototype.padStart()
console.log("String.prototype.padStart()")
let str4 = 'abc'
console.log(str4.padStart(6, '*'))
console.log(str4.padStart(6,'*').padEnd(9, '*'))