const items = [
    { name: 'Bike', price: 100 },
    { name: 'Tv', price: 240 },
    { name: 'Tv', price: 999 },
    { name: 'Album', price: 1000 },
    { name: 'Book', price: 54 },
    { name: 'Phone', price: 32 },
    { name: 'Computer', price: 1 },
    { name: 'Keyboard', price: 499 },
    { name: 'Knife', price: 500}
]

console.log(items);

const filteredItems = items.filter((item) => {
    return item.price <= 100;
})

console.log(filteredItems);

const itemNames = items.map((item) => {
    return item.price;
})

console.log(itemNames);

const foundItem = items.find((item) => {
    return item.name = 'Tv';
})

console.log(foundItem);

items.forEach((item) => {
    console.log(item.price);
})

const hasInexpensiveItems = items.some((item)=> {
    return item.price <= 100;
})

console.log(hasInexpensiveItems);

const hasOnlyInexpensiveItems = items.every((item)=> {
    return item.price <= 100;
})

console.log(hasOnlyInexpensiveItems);

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.log(total);

const numbers = [1, 2, 3, 4, 5, 6, 7];

const includesTwo = numbers.includes(2);

console.log(includesTwo);