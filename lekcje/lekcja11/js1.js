console.log('JS');

var a = 1;

b = 'tekst';

let c = 7;


a = 7;
b = '07';

console.log(a == b);
console.log(a === b);

var object1 = {
    imie: 'jacek',
    nazwisko: 'seń'
};


console.log(object1);


function napis() {
    console.log('Jestem w funkcji');
}

napis();

console.log(typeof napis);

var zmienna1 = napis;

zmienna1();

function dodawanie(x, y) {
    return x + y;
}

console.log(dodawanie(5,4));

console.log(dodawanie(5,4,33));

var condition = true;

if(null) {
    console.log('działam');
} else {
    console.log('było false');
}

var numer = 5;
var zmienna = 'bb';

switch(zmienna) {
    case 'aa':
        console.log('jeden');
        break;
    case 'bb':
        console.log('pięć');
        break;
    default:
        console.log('default');
        break;
}

for(let i = 0; i<10; i++) {
    console.log(i);
}

let licz = 0;
for(;;) {
    licz++;
    console.log(licz);
    if(licz === 4) {
        break;
    }
}


for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 2; j++) {
        if(i === 1) {
            break;
        }
        console.log('j = ' + j);
    }
    console.log('i = ' + i);
}

var tab =[1, 2, 3];

console.log(tab[1]);

licz = 5;

while(licz < 10) {
    console.log(licz);
    licz++;
}


while(true) {
    licz++;
    if(licz === 14) {
        break;
    }
    console.log(licz);
}

a = 7;
b = 3;

a += b;
console.log(a);


a = 1.3;
b = 2.2;
console.log((a * b).toFixed(2));


if((a * b).toFixed(2) == 2.86) {
    console.log('prawda');
} else {
    console.log('fałsz');
}

console.log((1 == 1) && (2 == 3));

a = 5;
b = 5;
console.log( a == b ? 'Equal' : 'Not equal');

let array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);
var newArray2 = array.splice(2,3);
console.log(array);
console.log(newArray2);

array = [1, 2, 3, 4, 5, 6, 7];
var newArray3 = array.slice(2,4);
console.log(newArray3);
console.log(array);


array = [1,2,3,4,5,6];
var filterArray = array.filter(value => {
    return value > 2;
});

console.log(filterArray);

var person = {
    name: 'Jacek',
    age: 46,
    adres: {
        ulica: 'Nagietkowa',
        numer: 58,
        kod: '81-589'
    },
    hobbies: ['motór', 'podróże'],
    greet: function() {
        console.log('Hello');
    },
    // w cudzysłowie można używać znaków normalnie niedozowlonych
    "99tt": 'wartosc'
};

person.greet();

// https://github.com/jaceksen/JSLessons.git










