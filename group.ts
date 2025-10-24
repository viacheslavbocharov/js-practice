const products = [
  { name: 'apple', category: 'fruit' },
  { name: 'carrot', category: 'vegetable' },
  { name: 'banana', category: 'fruit' },
  { name: 'tomato', category: 'vegetable' },
];

type Prod = {
  name: string;
  category: string;
};

function groupItems(prodArr: Prod[]): Record<string, string[]> {
  return prodArr.reduce<Record<string, string[]>>((acc, prod) => {
    if (!acc[prod.category]) acc[prod.category] = [];
    acc[prod.category]!.push(prod.name);
    return acc;
  }, {});
}

console.log(groupItems(products));
