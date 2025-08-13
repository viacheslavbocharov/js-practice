// function lastChat(str: string): string {
//   return str[str.length - 1];
// }

// function lastChat1(str: string): string | undefined {
//   return str.at(-1);
// }

// function lastChat2(str: string): string {
//   return str.slice(-1);
// }

// function lastChat3(str: string): string {
//   return str.charAt(str.length - 1);
// }

// console.log(lastChat('Mozilla'));
// console.log(lastChat1('Mozilla'));
// console.log(lastChat2('Mozilla'));
// console.log(lastChat3('Mozilla'));

//==================================================

// function countUnits(str: string): number {
//   return str.length;
// }
// console.log(countUnits('A😺Б'));

// function countPoints(str: string): number {
//   let counter = 0;
//   for (const char of str) {
//     counter += 1;
//   }
//   return counter;
// }

// console.log(countPoints('A😺Б'))

//======================================

// interface IInspectObj {
//   unitsHex: string[];
//   pointsHex: string[];
// }

// function inspectCode(str: string): IInspectObj {
//   const res: IInspectObj = {
//     unitsHex: [],
//     pointsHex: [],
//   };
//   for (let i: number = 0; i < str.length; i++) {
//     res.unitsHex.push("0x" + str.charCodeAt(i).toString().toUpperCase());
//   }

//   for (const element of str) {
//     res.pointsHex.push("0x" + element.codePointAt(0)!.toString(16).toUpperCase())
//   }

//   return res;
// }

// console.log(inspectCode('A😺Б'));

//=======================================

// function charsUntilSpace(str: string): string[] {
//   return str.split(' ', 1)[0].split('');
// }

// function charsUntilSpace2(str: string): string[] {
//   const result: string[] = [];
//   for (const ch of str) {
//     if (ch === ' ') break;
//     result.push(ch);
//   }
//   return result;
// }

// function charsUntilSpace3(str: string): string[] {
//   let spaceIndex: number = str.indexOf(' ');
//   return [...(spaceIndex === -1 ? str : str.slice(0, spaceIndex))];
// }

// console.log(charsUntilSpace('The 🦊 jumps'));
// console.log(charsUntilSpace2('The 🦊 jumps'));
// console.log(charsUntilSpace3('The 🦊 jumps'));
// console.log(charsUntilSpace3('jumps'));

//=========================================

// includes()
// indexOf() ↔ lastIndexOf()
// search()
// match() ↔ matchAll()

// function hasWord(str: string, search: string): boolean {
//   return str.includes(search);
// }
// console.log(hasWord('The quick brown fox', 'fox'));
// console.log(hasWord('The quick brown fox', 'Fox'));

// function firstIndexOf(str: string, search: string): number {
//   return str.indexOf(search);
// }
// console.log(firstIndexOf('banana', 'na'));
// console.log(firstIndexOf('apple', 'z'));

// function lastIndexOfWord(str: string, search: string): number {
//   let index = str.indexOf(search);

//   if (index != -1) {
//     for (let i = index; i < str.length; ) {
//       if (str.indexOf(search, i) != -1) {
//         index = str.indexOf(search, i);
//         i = index + 1;
//         continue;
//       }
//       break;
//     }
//   }

//   return index;
// }

// function allIndexOfWord(
//   str: string,
//   word: string,
//   overlap: boolean = false
// ): number[] | undefined {
//   if (!word) return [];
//   let indexList: number[] = [];
//   let firstIndex = str.indexOf(word);
//   if (firstIndex != -1) {
//     indexList.push(firstIndex);
//     for (let start = firstIndex + 1; start < str.length; ) {
//       let nextIndex = str.indexOf(word, start);
//       if (nextIndex != -1) {
//         indexList.push(nextIndex);
//         start = nextIndex + 1;
//         continue;
//       }
//       return indexList;
//     }
//   } else {
//     return indexList;
//   }
// }

// function allIndexOfWord(
//   str: string,
//   word: string,
//   overlap: boolean = false
// ): number[] {
//   if (!word) return [];
//   const indexList: number[] = [];
//   let start = 0;

//   while (true) {
//     const idx = str.indexOf(word, start);
//     if (idx === -1) break;
//     indexList.push(idx);
//     start = idx + (overlap ? 1 : word.length);
//   }

//   return indexList;
// }

// console.log(allIndexOfWord('aaaa', 'aa'));

//================================================

// function startsWithWord(str: string, word: string): boolean {
//   return str.startsWith(word);
// }
// console.log(startsWithWord('JavaScript is cool', 'Java'));
// console.log(startsWithWord('TypeScript', 'Java'));

//==============================================

// function findNumbers(str: string): string[] | null {
//   const regex = /\d+/g;
//   const res = str.match(regex);
//   return res;
// }
// console.log(findNumbers("I have 2 cats and 14 fish"))

//==================================

// function isFromDomain(email: string, domain: string): boolean {
//   return email.endsWith(domain);
// }
// console.log(isFromDomain('user@gmail.com', 'gmail.com'));
// console.log(isFromDomain('user@yahoo.com', 'gmail.com'));

// function isCommand(message: string): boolean {
//     return message.startsWith("!")
// }
// console.log(isCommand("!help"))
// console.log(isCommand("help"))

// function filterByExtension(files: string[], ext: string): string[] {
//   return files.filter((el) => el.endsWith(ext));
// }

// function filterByExtension2(files: string[], ext: string): string[]{
//     const res: string[] = []
//     for (const element of files) {
//         if (element.endsWith(ext)) {
//             res.push(element)
//         }
//     }
//     return res
// }

// console.log(filterByExtension(["file.txt", "image.png", "note.txt"], ".txt"))
// console.log(filterByExtension2(["file.txt", "image.png", "note.txt"], ".txt"))

//=========================================

// function isFromCountry(phone: string, countryCode: string): boolean {
//     return phone.startsWith(countryCode)
// }
// console.log(isFromCountry("+380501234567", "+380"))

//===================================

// function removeSuffix(str: string, suffix: string): string {
//   if (str.endsWith(suffix)) {
//     return str.slice(0, str.length - suffix.length);
//   }
//   return str
// }
// console.log(removeSuffix("document.txt", ".txt"))
// console.log(removeSuffix("image.png", ".txt"))

//===============================
//slice() ↔ substring()
// function firstN(str: string, n: number): string {
//   return str.slice(0, n);
// }
// console.log(firstN('JavaScript', 4));

// function lastN(str: string, n: number): string {
//   return str.slice(-n);
// }
// console.log(lastN('TypeScript', 6));

// function trimEdres(str: string): string {
//     return str.slice(1, -1)
// }
// console.log(trimEdres('Hello'))

// function middlePart(str: string, start: number, end: number): string {
//     return str.slice(start, end)
// }
// console.log(middlePart("The quick brown fox", 4, 9))

// function getFileExtension(str: string): string {
//   let dotIndex = str.indexOf('.');
//   let res = str;
//   if (dotIndex === -1) res = str;
//   if (dotIndex != -1) {
//     for (let start = dotIndex; start < str.length; ) {
//       let nextDotIndex = str.indexOf('.', start);
//       if (nextDotIndex === -1) {
//         res = str.slice(dotIndex);
//         break;
//       }
//       dotIndex = nextDotIndex;
//       start = nextDotIndex + 1;
//     }
//   }
//   return res;
// }

// function getFileExtension2(str: string): string {
//   return str.trim().slice(str.lastIndexOf('.'));
// }

// console.log(getFileExtension('archive.tar.gz'));
// console.log(getFileExtension2('archive.tar.gz'));

//=================================
//replace() replaceAll()

// function slugify(str: string): string {
//   return str.replaceAll(' ', '-');
// }
// console.log(slugify('Hello World JS'));

// function stripTags(html: string): string {
//     return html.replaceAll(/<[^>]*>/g, '')
// }
// console.log(stripTags("<p>Hello</p> <b>world</b>"))

// //====================================
// function hideNumbers(str: string): string {
//     return str.replace(/\d/g, '*')
// }
// console.log(hideNumbers("Card 1234 5678"))

// function fixTypo(str: string, replace: string, replacment: string): string {
//   return str.replaceAll(replace, replacment);
// }
// console.log(fixTypo('I love JS and JS libraries', 'JS', 'JavaScript'));

// function normalizeSpaces(str: string): string {
//     return str.trim().split(' ').filter(el => el !== '').join(' ')
// }
// console.log(normalizeSpaces("Hello   world      JS"))

//======================================

// concat()
// repeat()

// function fullName(name: string, lastName: string): string {
//   // return String.prototype.concat(name, ' ', lastName)
//   return name.concat(' ', lastName)
//   // return name + ' ' + lastName;
// //   return Array.from(arguments).join(' ')
// }
// console.log(fullName('John', 'Doe'));

//========================================

// function repeatChar(ch: string, n: number): string {
//     return ch.repeat(n)
// }
// console.log(repeatChar("*", 5))

// function doAsterixFrane(str: string): void {
//   console.log('*'.repeat(str.length + 4));
//   console.log(String.prototype.concat('* ', str, ' *'));
//   console.log('*'.repeat(str.length + 4));
// }
// doAsterixFrane('Slava');

//===================================

// function joinWords(words: string[]): string {
//   // return words.join("-")
//   let str = '';
//   words.forEach((element) => {
//     str = str.concat(element, '-');
//   });
//   return str.slice(0, -1)
// }
// console.log(joinWords(['JavaScript', 'is', 'fun']));

//=================================

// function repeatWithSeparator(str: string, times: number, sep: string): string {
//     return str.concat(sep).repeat(times).slice(0, -(sep.length))
// }
// console.log(repeatWithSeparator("ha", 3, "-"))

//===================================

//padStart() ↔ padEnd()
// function formatOrderNumber(id: number): string {
//   return 'ORD-'.concat(id.toString().padStart(5, '0'));
// }
// console.log(formatOrderNumber(42))

// function alignName(name: string): string {
//     return name.padStart(15, ' ')
// }
// console.log(alignName('Slava'))
// console.log(alignName('Eva'))

// function formatTime(hours: number, minutes: number): string {
//   return (
//     hours < 10 ? hours.toString().padStart(2, '0') : hours.toString()
//   ).concat(
//     ':',
//     minutes < 10 ? minutes.toString().padStart(2, '0') : minutes.toString()
//   );
// }
// console.log(formatTime(9, 5));
// console.log(formatTime(10, 15));

//=======================================
// split()

// function getWords(sentence: string): string[] {
//     // return sentence.match(/\w+/g) || []
//     return sentence.split(/\W+/g).filter(Boolean)
// }
// console.log(getWords("Hello, world!"))

// function parseCSV(line: string): string[] {
//     return line.split(',')
// }
// console.log(parseCSV("apple,banana,pear"))

// function getExtension(filename: string): string {
//   //   return filename.split('.').at(-1) ?? '';
//   return filename.split('.').slice(-1)[0];
// }
// console.log(getExtension('archive.tar.gz'));

// function getFolders(path: string): string[] {
//     return path.split('/').filter(Boolean)
// }
// console.log(getFolders("/home/user/docs"))

// function splitLines(text: string): string[] {
//     return text.split(/\r?\n/)
// }
// console.log(splitLines("line1\nline2\r\nline3"))

//===============================
// toLowerCase() ↔ toUpperCase()
// trimStart() ↔ trimEnd() (и просто trim())

// function equalsIgnoreCase(a: string, b: string): boolean {
//     return a.toLocaleLowerCase === b.toLocaleLowerCase
// }

// console.log(equalsIgnoreCase("Hello", "hello"))

// function shout(str: string): string {
//     return str.toUpperCase()
// }
// console.log(shout('hey you'))

// function normalizeInput(str: string): string {
//     return str.trim()
// }
// console.log(normalizeInput("  Hi "))

// function formatName(name: string): string {
//   let trimmed = name.trim().toLowerCase();
//   //   return trimmed.replace(trimmed[0], trimmed[0].toUpperCase())
//   // return trimmed[0].toUpperCase() + trimmed.slice(1)
//   return trimmed[0].toUpperCase().concat(trimmed.slice(1));
// }
// console.log(formatName(' aLICE '));

// function removeLeadingSpaces(text: string): string {
//     return text.trimStart()
// }
// console.log(removeLeadingSpaces(" hello "))

//====================

// function getFilePath(folder: string, file: string): string {
//   let path = 'C:';
//   Array.from(arguments).forEach((el) => {
//     path = path.concat('\\', el);
//   });
//   return path;
// }
// console.log(getFilePath('Projects', 'data.txt'));

// function showLiteral(text: string): string {
//     return String.raw`${text}`
// }
// console.log(showLiteral("Hello\nWorld"))
// console.log(String.raw`Hello\nWorld`)

// function buildSQL(table: string, column: string) {
//   return String.raw`
// SELECT ${column}
// FROM ${table}
// WHERE ${column} IS NOT NULL\nAND ${column} != '';
//   `;
// }

// console.log(buildSQL("users", "email"));

