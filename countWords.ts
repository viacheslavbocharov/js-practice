// function countWords(str: string): Record<string, number> {
//   let arr = str.toLowerCase().split(' ');
//   const res: Record<string, number> = {};
//   if (typeof str !== 'string') {
//     throw new Error('Input must be a string');
//   }
//   for (let word of arr) {
//     !res[word] ? (res[word] = 1) : res[word]++;
//   }
//   return res;
// }

function countWords(str: string): Record<string, number> {
  let cleanArr = str
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, ''));
  return cleanArr.reduce<Record<string, number>>((acc, word) => {
    acc[word] ? (acc[word] += 1) : (acc[word] = 1);
    return acc;
  }, {});
}

console.log(countWords('JavaScript is great and JavaScript is fun'));
