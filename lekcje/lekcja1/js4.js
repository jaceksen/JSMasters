var x = 1;
var y = true;

console.log('Wynik: ' + x);
console.log('Wynik2: ', x);

console.log('czy prawda', y);

console.log(typeof y);

var tablica = [1, 2, 'aaaaa'];


console.log(tablica);

console.log(tablica[1]);

console.log(tablica[100]);

console.log(typeof tablica[100]);

var j = NaN;
// number
console.log(typeof j);

var k = null;
// object
console.log(typeof k);

console.log(null == undefined);
console.log(null === undefined);

var obiekt = {
    imie: 'Jacek',
    nazwisko: 'Seń',
    wiek: 111
}

console.log(obiekt);
console.log(obiekt.nazwisko);