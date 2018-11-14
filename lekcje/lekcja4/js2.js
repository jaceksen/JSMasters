let a = 5;
let b = a;

console.log(a,b);

a = 20;

console.log(a,b);

let c = {a: 5};
let d = c;

console.log(c);
console.log(d);

// c = {m: 110};
c.a = 7;
console.log(c);
console.log(d);


tab1 = [1, 2, 3];
tab2 = tab1;
console.log(tab1);
console.log(tab2);

tab2.push(4);
// tab2 = [1,2,3,4];
console.log(tab1);
console.log(tab2);

// -----------------------


var aa = 'global';
var bb = 'ralalala';

function funkcja() {
    var aa = 'local scope';
    bb = 'global scope bb bo bez var';
    console.log(aa);
    console.log(bb);
}

funkcja();

console.log(aa);
console.log(bb);

(function(){
    var cc = 'cccc';
    console.log(cc);
})();

(() => {
    // var cc = 'ddddd';
    try {
        console.log('Wyswietalam cc', cc);
    } catch (e) {
        console.log('Nie wiem co to cc');
        // console.log(e);
    }
    // console.log(cc);
})();

console.log('cokolwiek');


