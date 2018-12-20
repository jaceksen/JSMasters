// closures
// anonymous functions

function generator(input) {
    var numer = input;
    return function() {
        return numer * 2;
    };
}

var zmienna1 = generator(10);
console.log(zmienna1());

console.log(generator(333)());


// IIFEs - immediatelly invoked functions

console.log(' ----- IIFEs ----');

function calc() {
    console.log('Calc');
}

calc();

(function calc1() {
    console.log('Tralala');
})();

(() => {console.log('2222');})();

((wejscie) => {
    console.log('Wejście: ' + wejscie);
})(4444);

console.log('Built-in methods & properites --------------------');

function wiadomosc(info) {
    console.log(info);
    console.log(arguments);
}

wiadomosc('Parametr');

var aaa = wiadomosc;

console.log(aaa.name);

console.log(aaa.length);

var name = 'Jacek';

var f2 = function(message) {
    console.log(message);
    console.log('Imię: ' + name);
};

f2('alamakota');

var obj = {
    name: 'Tomek'
};


function printName() {
    console.log(this.name);
}

printName.bind(obj)();


// setTimeout

// setTimeout(function () {
//     console.log('Zrobione');
// }, 2000);

// setTimeout(() => {console.log('Zrobione2');},2000);

var a = '5';
console.log(a);
console.log(parseInt(a));
console.log(parseInt('dfsdf'));

var b = 'FBB123';
console.log(parseInt(b));
console.log(parseInt(b, 16));

var c = 10;
console.log(c.toString());

var d = 'jakiś string';
console.log(d.length);
console.log(d[3]);
console.log(d.charAt(3));

console.log(d.concat(' rozbudowany.'));

console.log(d.toUpperCase());

console.log(d.split(' '));

var e = '  dsfsda  f   ';
console.log(e.trim()); 

//Math
var pi = Math.PI;
console.log(pi);
var e = Math.E;

a = 1.27;
console.log(Math.floor(a), Math.ceil(a), Math.round(a));

console.log(Math.max(1,44,5,22));

console.log(Math.random());
var rnd = Math.floor(Math.random() * 100) + 1;
console.log(rnd);
















