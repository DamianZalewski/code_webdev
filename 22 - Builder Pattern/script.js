class Address{
    constructor(zip, street){
        this.zip = zip;
        this.street = street
    }
}

class User{
    constructor(name){
        this.name = name;
    }
}

class UserBuilder{
    constructor(name){
        this.user = new User(name);
    }

    setAge(age){
        this.user.age = age;
        return this;
    }

    setPhone(phone){
        this.user.phone = phone;
        return this
    }

    setAddress(address){
        this.user.address = address;
        return this;
    }

    build(){
        return this.user;
    }
}

let user = new UserBuilder('Bob').setAge(10).setPhone('111222333').build();

console.log(user);

// -----------------

class User2{
    constructor(name, {age, phone = '123456789', address} = {}){
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

let user2 = new User2('Bob', {age: 10, address: new Address('1', 'Main')});

console.log(user2);