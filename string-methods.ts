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
//charAt()
//Returns the character (exactly one UTF-16 code unit) at the specified index. Accepts negative integers, which count back from the last string character.
console.log('charAt()');
console.log(word.at(-1));

//charCodeAt()
//Returns the character (exactly one UTF-16 code unit) at the specified index.console.log("charCodeAt()")
console.log(word.charAt(0));

//codePointAt()
//Returns a number that is the UTF-16 code unit value at the given index.
console.log('codePointAt()');
console.log(word.charCodeAt(0));

//concat()
console.log('concat()');
console.log(word.concat(' is a browser', '!'));
let newStr = String.prototype.concat(word, '!');
console.log(newStr);

//endsWith()
//This method lets you determine whether or not a string ends with another string. This method is case-sensitive.
console.log('endsWith()');
let str2 = 'To be, or not to be, that is the question.';
console.log(str2.endsWith('question.'));
console.log(str2.endsWith('to be', 19));

//includes()
// The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.
//The position within the string at which to begin searching for searchString. (Defaults to 0.)
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log('includes()');
console.log(sentence.includes('fox'));
console.log(sentence.includes('Fox'));
console.log(sentence.includes('fox', 5));

//indexOf()
//The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.
console.log('indexOf()');
const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph.indexOf('dog')); //15
console.log(paragraph.indexOf('dog', 16)); //38

//lastIndexOf()
//The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring. It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.
console.log('lastIndexOf()');
console.log(paragraph.lastIndexOf('dog')); //38

//match()
//The match() method of String values retrieves the result of matching this string against a regular expression.
console.log('match()');
let text = 'I have 2 apples and 3 bananas';
console.log(text.match(/\d+/)); // без 'g', output - ["2", index: 7, input: "I have 2 apples and 3 bananas", groups: undefined]
console.log(text.match(/\d+/g)); // ["2", "3"]

//matchAll()
console.log('matchAll()');
//The matchAll() method of String values returns an iterator of all results matching this string against a regular expression, including capturing groups.
let text2 = 'I have 2 apples and 3 bananas';
let regex = /\d+/g;
for (const match of text2.matchAll(regex)) {
  console.log(match);
}

//padEnd()
//The padEnd() method of String values pads this string with a given string (repeated and/or truncated, if needed) so that the resulting string has a given length. The padding is applied from the end of this string.
let str3 = '';
console.log(str3.padEnd(6, 'la')); //lalala

//padStart()
//The padStart() method of String values pads this string with a given string (repeated and/or truncated, if needed) so that the resulting string has a given length. The padding is applied from the start of this string.
console.log('padStart()');
let str4 = 'abc';
console.log(str4.padStart(6, '*'));
console.log(str4.padStart(6, '*').padEnd(9, '*'));

//repeat()
// The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.
console.log('repeat()');
const la: string = 'la';
const new_la: string = la.repeat(5); //lalalalala
console.log(new_la);

//replace()
//The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.
console.log('replace()');
const paragraph2 = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph2.replace("Ruth's", 'my')); // Expected output: "I think my dog is cuter than your dog!"
const regex2 = /dog/i;
console.log(paragraph.replace(regex2, 'ferret')); // Expected output: "I think Ruth's ferret is cuter than your dog!"

//replaceAll()
// The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.
console.log('replaceAll()');
const paragraph3 = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph3.replaceAll('dog', 'monkey')); // Expected output: "I think Ruth's monkey is cuter than your monkey!"
const regex3 = /dog/gi;
console.log(paragraph3.replaceAll(regex3, 'ferret')); // Expected output: "I think Ruth's ferret is cuter than your ferret!"

//search()
//The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string.
console.log('search()');
let text3 = 'I have 2 apples and 3 bananas';
console.log(text3.search(/\d+/)); // 7 (первая цифра "2" на позиции 7)
console.log('Hello'.search(/\d/)); // -1 (цифр нет)

//slice()
//The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.
console.log('slice()');
const str5 = 'The quick brown fox jumps over the lazy dog.';
console.log(str5.slice(31)); // Expected output: "the lazy dog."
console.log(str5.slice(4, 19)); // Expected output: "quick brown fox"
console.log(str5.slice(-4)); // Expected output: "dog."
console.log(str5.slice(-9, -5)); // Expected output: "lazy"
const str6 = 'The morning is upon us.';
str6.slice(-3); // 'us.'
str6.slice(-3, -1); // 'us'
str6.slice(0, -1); // 'The morning is upon us'
str6.slice(4, -1); // 'morning is upon us'

//split()
//The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
const str7 = 'The quick brown fox jumps over the lazy dog.';
const words = str7.split(' ');
console.log(words[3]); // Expected output: "fox"
const chars = str7.split('');
console.log(chars[8]); // Expected output: "k"

//startsWith()
// The startsWith() method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate.
const str8 = 'To be, or not to be, that is the question.';
console.log(str8.startsWith('To be')); // true
console.log(str8.startsWith('not to be')); // false
console.log(str8.startsWith('not to be', 10)); // true

//substring()
// The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.
const anyString = 'Mozilla';
console.log(anyString.substring(0, 1)); // "M"
console.log(anyString.substring(1, 0)); // "M"
console.log(anyString.substring(0, 6)); // "Mozill"
console.log(anyString.substring(4)); // "lla"
console.log(anyString.substring(4, 7)); // "lla"
console.log(anyString.substring(7, 4)); // "lla"
console.log(anyString.substring(0, 7)); // "Mozilla"
console.log(anyString.substring(0, 10)); // "Mozilla"

//toLowerCase()
// The toLowerCase() method of String values returns this string converted to lower case.
const sentence2 = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence2.toLowerCase()); // Expected output: "the quick brown fox jumps over the lazy dog."

//toString()
// The toString() method of String values returns this string value.
const x = new String('Hello world');
console.log(x.toString()); // "Hello world"

//toUpperCase()
// The toUpperCase() method of String values returns this string converted to uppercase.
console.log('alphabet'.toUpperCase()); // 'ALPHABET'

//trim()
// The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
const str9 = '   foo  ';
console.log(str9.trim()); // 'foo'

//trimEnd()
// The trimEnd() method of String values removes whitespace from the end of this string and returns a new string, without modifying the original string. trimRight() is an alias of this method.
const greeting = '   Hello world!   ';
console.log(greeting.trimEnd()); // Expected output: "   Hello world!";

// trimStart()
// The trimStart() method of String values removes whitespace from the beginning of this string and returns a new string, without modifying the original string. trimLeft() is an alias of this method.
const greeting2 = '   Hello world!   ';
console.log(greeting2.trimStart()); // Expected output: "Hello world!   ";

//valueOf()
// The valueOf() method of String values returns this string value.
const y = new String('Hello world');
console.log(y.valueOf()); // 'Hello world'

//iterator]()
// The [Symbol.iterator]() method of String values implements the iterable protocol and allows strings to be consumed by most syntaxes expecting iterables, such as the spread syntax and for...of loops. It returns a string iterator object that yields the Unicode code points of the string value as individual strings.
const str10 = "The quick red fox jumped over the lazy dog's back.";

const iterator = str10[Symbol.iterator]();
let theChar = iterator.next();

while (!theChar.done && theChar.value !== ' ') {
  console.log(theChar.value);
  theChar = iterator.next();
  // Expected output: "T"
  //                  "h"
  //                  "e"
}
