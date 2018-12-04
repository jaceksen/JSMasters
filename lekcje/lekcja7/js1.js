Object.prototype.powitanie = function() {
    console.log("Coś tam tam");
};

var person = {
    imie: 'jacek',
    wiek: 46
};

console.log(person);

person.powitanie();

console.log(person.toString());

var jacek = Object.create(person);
console.log(jacek.imie);
console.log(jacek);
jacek.powitanie();

console.log(jacek.__proto__ == person); 
console.log(jacek.__proto__.__proto__ == Object.prototype);
console.log(jacek.__proto__);
console.log();

// tworzenie obiektów za pomocą funkcji

function Samochod() {}

var samochod = new Samochod();

console.log(samochod);

// samochod.marka = 'fiat';
// samochod.kola = 4;

console.log(samochod);


