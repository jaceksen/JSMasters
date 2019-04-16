// obiekty w JS

let obj = {
    name: 'Jacek',
    age: 47
};

//ES6

let name = 'Maja';
let ageM = 7;

let maja = {
    name,
    ageM
};

console.log(maja);

maja = {
    name: 'Majusia',
    ageM,
    greet() {console.log(name);},
    greet2() {console.log(this.name);},
    '0hello'() {console.log('Tralalala');}
};

maja.greet();
maja.greet2();
// maja.0hello();
maja['0hello']();

// dynamiczne właściwości obiektu w JS

let ageField = 'wiek';

const jacek = {
    name: 'Jacek',
    [ageField]: 47
};

console.log(jacek);
console.log(jacek.wiek);
console.log(jacek[ageField]);