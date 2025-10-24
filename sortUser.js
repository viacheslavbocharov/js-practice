const users = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 16 },
  { name: 'David', age: 30 },
];

function sortAdultUsers(users) {
  return users
    .filter((user) => user.age > 18)
    .sort((a, b) => a.age - b.age)
    .map((user) => user.name);
}

console.log(sortAdultUsers(users));
