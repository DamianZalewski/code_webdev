const array = [1, 2, 3];

function addElementToArray(a, element){
    return [...a, element];
}

console.log(addElementToArray(array, 4));
console.log(array);