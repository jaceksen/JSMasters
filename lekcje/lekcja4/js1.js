let a = 5;
let b = 10;

a += b;

//16
a++;

let c = 'tekst';

c += a;

console.log('c::', c);
// tekst16

let e = true;

console.log(e + c);
// truetekst16

let f = [1,2];
let g = ' napis';

console.log(f + g);

// 1,2 napis

let h = true;
let i = true;

console.log(h+i);
// 2

let j = 12;
let k = null;

console.log(j+k);
//12

let l = undefined;
let m = 100;

console.log(l+m);
// NaN

let n = 'tekst 1';
let o = 'tekst 2';

console.log(n - o);
// NaN

let p = 12;
let r = '1';

console.log(p-r);
// 11

r--;
console.log(r);
// 0

a = 1.3;
b = 2;
console.log(a*b);
// 2.6

a = 1.3;
b = 2.2;
console.log(a * b);
// 2.8600000000000003

if(a * b === 2.86) {
    console.log('prawda');
} else {
    console.log('fałsz');
}

console.log(Number((a * b).toFixed(2)));

if((a * b).toFixed(2) == 2.86) {
    console.log('jednak prawda');
} else {
    console.log('a jednak nie - nie ten typ');
}

a = 2;
b = 'tekst';
console.log(a * b);
//NaN

a = 'tralala';
b = null;

a = 12;
b = 2;

a /= b;
console.log(a);
// 6

a = 12;
b = '2';

console.log(a / b);
// 6

a = 3.3;
b = 2.2;
console.log(Number((a / b).toFixed(2)));
// 1.5

a = 10;
b = 3;
console.log(a % b);
// 1

a = 10;
b = Infinity;

console.log('a::', a / b);


console.log(1 === 1);
// true
console.log(1 === '1');
// false
console.log(1 == '1');
// true



console.log('nan', NaN == NaN);
// false

console.log('bbb');
console.log(NaN == 'rdfdfr');
// false
console.log(Infinity == Infinity);
// true

console.log('0null', 0 == null);
// false
console.log(null === null);
// true

console.log('nullUndef', null == undefined);
// true
console.log('nullUndef', null === undefined);
// false

console.log('---------------')
if(1 == 1 && 2 == 2) {
    console.log('true');
}


console.log((1 == 1) || (2 == 3));




console.log('||&&', (1 == 1) || (2 == 2) && (4 == 3));
// true

console.log('||&&2', (1 == 1) || (2 == 3) && (4 == 3));
// true

console.log('||&&3', (1 == 2) || (2 == 2) && (3 == 4));
// false

let isTrue = true;
console.log(!isTrue);

a = 5;
b = 5;

console.log( a == b ? 'Równe' : 'Nie równe');
