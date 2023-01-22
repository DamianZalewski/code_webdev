const sumConst = (a, b) => a + b;

console.log(`sumFunc(1, 2) => ${sumFunc(1, 2)}`);
console.log(`sumFunc(3, 4) => ${sumConst(3, 4)}`);
console.log(`a = ${a}`);

function sumFunc(a, b){
    return a+b;
}

var a = 2;