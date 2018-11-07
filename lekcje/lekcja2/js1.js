function napis() {
    console.log('Napis w funkcji');
}

napis();

napis2();

function napis2() {
    console.log('Funkcja 2');
}

var jakasZmienna = napis2;

jakasZmienna();

console.log(typeof jakasZmienna);

function napis3() {
    return 'napis zwaracany z funkcji';
}

var jakasZmienna2 = napis3();

console.log(jakasZmienna2);
console.log(typeof jakasZmienna2);
// jakasZmienna2();

// kolejny sposób definiowania funkcji

var kolejnaFunkcja = function() {
    console.log('tralalla');
}

kolejnaFunkcja();

function dodawanie(x, y) {
    return x+y;
}

var wynDodawania = dodawanie(10,20);
console.log(wynDodawania);

var toSamo = dodawanie;
console.log(toSamo(30,30));

var wynDodawania2 = dodawanie(10,20,30);
console.log(wynDodawania2);

var wynDodawania3 = dodawanie();
console.log(wynDodawania3);