if(true) {
    var name = "jacek";
}

console.log(name);

if(true) {
    let name2 = 'placek';
}

try{
    console.log(name2);
} catch(error) {
    console.log('Ni da rady');
}

let kolor = 'czerwony';

if(true) {
    console.log(kolor);
}

const samochod = 'fiat';

try {
    samochod = 'ford';
} catch (error) {
    console.log('Const jest const');
}

const bb = [1,2,3,4];
bb.push(5);
console.log(bb);

// ------- arrow functions --------

function fn() {
    console.log('coś tam');
    //retrurn ...
}

fn();

let fn2 = () => { console.log('cośtam2'); };
let fn3 = () => console.log('cośtam3');

fn2();
fn3();

let fn4 = () => 'hello';
console.log(fn4());

let fn5 = (a,b) => a + b;
console.log(fn5(3,3));

let fn6 = x => x + 10;
console.log(fn6(22));

// setTimeout(() => console.log('aa'),1000);

// --- arrow functions and THIS -----

function fu1() {
    console.log(this);
}

let buttons = document.querySelectorAll('button');
let button = buttons[0];
button.addEventListener('click', fu1);

let fu2 = () => console.log(this);

let button2 = buttons[1];
button2.addEventListener('click', fu2);

// ----- default value --------------

let jestRowne = (numer, porownanie) => numer === porownanie;

console.log(jestRowne(20,20));

let jestRowne2 = (numer, porownanie = 0) => numer === porownanie;

console.log(jestRowne2(20,20));
console.log(jestRowne2(20));
console.log(jestRowne2(0));

let jestRowne3 = (numer, porownanie = 20/numer-8) => numer === porownanie;

console.log(jestRowne3(10));
console.log(jestRowne3(2));


