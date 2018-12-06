var anotherPerson = new Object();
anotherPerson.imie = 'Maja';
anotherPerson.nazwisko = 'Seń';
console.log(anotherPerson);

var obiekt2 = {
    dl: 10,
    szer: 20,
    gl: 3,
    str: "3"
};

console.log(obiekt2);

function Person() {}

var person = new Person();

person.name = 'Jacek';

console.log(person);

Person.prototype.greet = function() {
    console.log('Tralalala');
};

console.log(person);

person.greet();

function Person2() {
    this.name = '';
    this.greet = function() {
        console.log('Hej ' + this.name);
    };
}

person2 = new Person2();

console.log(person2);

person2.name = 'Rima';
person2.greet();

kolejny = new Person2();
kolejny.name = 'Lena';
kolejny.greet();

function Person3(imie, wiek) {
    this.imie = imie;
    this.wiek = wiek;
    // console.log(this.imie, this.wiek);
}
console.log('=========================');
// Person3('Tigo',33);

jacek = new Person3('Jacek', 46);
console.log(jacek);

console.log(jacek.wiek);

console.log(jacek);

jacek2 = {
    imie: 'Jacek',
    wiek: 46
};

var tab1 = [];

for(let i=1; i<=10; i++) {
    console.log(i);
    // jacek = new Person3('jacek', i);
    tab1.push(new Person3('Jacek'.concat(' numer ' + i +'.'), i*10));
}

console.log(tab1);


