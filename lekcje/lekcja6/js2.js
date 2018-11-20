var samochod = 'Toyota';
// var imie = 'Teodor';

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
        console.log('Mam na imię: ' + this.name);
    },
    samochod: function() {
        console.log('Moj samochod to ' + samochod);
    }
};

console.log(person);
person.greet();
person.samochod();

person.name = 'Rima';
person.greet();

// inny sposób tworzenia obiektów w JS

var anotherPerson = new Object();
anotherPerson.imie = 'Maja';
anotherPerson.nazwisko = 'Seń';
console.log(anotherPerson);

// trzeci sposób tworzenie obiektów w JS

var kolejnaOsoba = Object.create(null);
kolejnaOsoba.imie = 'Tigran';
kolejnaOsoba.nazwisko = 'Seń';
console.log(kolejnaOsoba);

// myk z __prototype__

var osoba3 = Object.create(person);
console.log(osoba3);
console.log(osoba3.name);
osoba3.greet();