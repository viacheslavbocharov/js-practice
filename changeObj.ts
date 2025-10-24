type User = {
  name: string;
  age: number;
  country: string;
};

type Entries = [string, string | number][];

const user = { name: 'Slava', age: 25, country: 'UK' };

const objEntries = (obj: User) => Object.entries(obj);
const objFromEntries = (entries: Entries) => Object.fromEntries(entries);
const entries = objEntries(user);

console.log(entries);
console.log(objFromEntries(entries));
