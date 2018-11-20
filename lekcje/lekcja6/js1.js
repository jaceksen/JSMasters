var person = {
    name: 'Jacek',
    age: 46,
    adres: {
        ulica: 'Nagietkowa',
        numer: 58,
        kod: '81-589'
    },
    hobbies: ['motór', 'podróże'],
    greet: function() {
        console.log('Hello');
    },
    "99tt": 'wartość'
};

console.log(person);
person.greet();
console.log(person.name);
console.log(person.hobbies[0]);
console.log(person.adres.ulica);