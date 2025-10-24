// function unique(arr) {
//     return Array.from(new Set(arr))
// }

const unique = (arr) => [...new Set(arr)];

// function unique(arr) {
//   let uniq = [];
//   arr.forEach((el) => {
//     if (!uniq.includes(el)) uniq.push(el);
//   });
//   return uniq;
// }

// function unique(arr) {
//   return arr.filter((el, i) => arr.indexOf(el) === i);
// }

console.log(unique([1, 2, 3, 2, 4, 1, 5]));
