function* generateId(){
    let id = 1;

    while(true){
        const increment = yield id;

        if(increment != null){
            id += increment;
        } else{
            id++;
        }
    }
}

const generatorObject = generateId();
document.body.append(generatorObject.next().value+", ");
document.body.append(generatorObject.next().value+", ");
document.body.append(generatorObject.next().value+", ");
document.body.append(generatorObject.next(23).value+", ");
document.body.append(generatorObject.next().value+", ");

const generatorObject2 = generateId();
console.log(generatorObject2.throw(new Error("Hi!")));