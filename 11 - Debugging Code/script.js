const users = [
    {name: 'Kyle', age: 24},
    {name: 'Damian', age: 24},
    {name: 'Beata', age: 24},
    {name: 'Colin', age: 24},
    {name: 'Jacob'},
    {name: 'Tris', age: 24}
]

users.forEach(element => {
    printUser(element);
});

function printUser(user){
    if(user.age != null){
        document.body.innerHTML += `User ${user.name} will be ${user.age + 5} years old in five years.<br>`;
    } else{
        document.body.innerHTML +=  `User is called ${user.name}<br>`;
    }
}

const button = document.querySelector('#button');
const input = document.querySelector('#text-element');

button.addEventListener('click', () => {
    console.log(input.value);
});