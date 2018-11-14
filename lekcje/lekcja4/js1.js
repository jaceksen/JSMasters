let a = 5;
let b = 10;

a += b;

//16
a++;

let c = 'tekst';

c += a;

console.log(c);

let e = true;

console.log(e + c);

let f = [1,2];
let g = ' napis';

console.log(f + g);

let h = true;
let i = true;

console.log(h+i);

let j = 12;
let k = null;

console.log(j+k);

let l = undefined;
let m = 100;

console.log(l+m);

let n = 'tekst 1';
let o = 'tekst 2';

console.log(n - o);

let p = 12;
let r = '1';

console.log(p-r);

r--;
console.log(r);

a = 1.3;
b = 2;
console.log(a*b);

a = 1.3;
b = 2.2;
console.log(a * b);

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

a = 12;
b = '2';

console.log(a / b);

a = 3.3;
b = 2.2;
console.log(Number((a / b).toFixed(2)));

a = 10;
b = 3;
console.log(a % b);

a = 10;
b = Infinity;

console.log(a / b);

console.log(1 === 1);
console.log(1 === '1');
console.log(1 == '1');



console.log(NaN == NaN);
console.log('bbb');
console.log(NaN == 'rdfdfr');
console.log(Infinity == Infinity);

console.log(0 == null);
console.log(null === null);

console.log(null == undefined);

console.log('---------------')
if(1 == 1 && 2 == 2) {
    console.log('true');
}


console.log((1 == 1) || (2 == 3));




console.log((1 == 1) || (2 == 3) && (4 == 3));

let isTrue = true;
console.log(!isTrue);

a = 5;
b = 5;

console.log( a == b ? 'Równe' : 'Nie równe');
