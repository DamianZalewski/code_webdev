const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];

const [a,, c, ...rest] = alphabet;

console.log(a);
console.log(c);
console.log(rest);

const newArray = [...alphabet, ...numbers];

console.log(newArray);

function sumAndMultiply(a, b){
    return [a+b, a*b];
}

const [sum, multiply, division = 'No division'] = sumAndMultiply(2, 3);

console.log(sum);
console.log(multiply);
console.log(division);

// ------------------------

const personeOne = {
    name: 'Damian',
    age: 49,
    address: {
        city: 'Somewhere',
        state: 'One of them'
    },
    note: 'Something'
}

const personTwo = {
    name: 'Agatha',
    age: 26,
    address: {
        city: 'Somewhere else',
        state: 'Another one of them'
    }
}

const {name: firstName, address: { city }, ...restObj} = personTwo;

console.log(firstName);
console.log(city);
console.log(restObj);

const personThree = {...personeOne, ...personTwo};

console.log(personThree);

function printUser({ name, age, food = 'Watermelon'}){
    console.log(`Name is: ${name}, age is ${age}, food is ${food}`)
}

printUser(personThree);