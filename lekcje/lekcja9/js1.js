// this

function fn() {
    console.log(this);
}

fn();

var obj = {
    objfn: fn
};

obj.objfn();

obj.objfn.bind(this)();

var person = {
    imie: 'Jacek'
};

console.log('-------');
obj.objfn.bind(person)();

console.log('*****************');

function fn2(nazwisko, drugie) {
    console.log(this.imie);
    console.log(nazwisko);
    // console.log(drugie);
    // console.log(this.drugie);
}

var osoba = {
    fn2: fn2
};

var osoba2 = {
    imie: 'Maja',
    drugie: 'MMMMMM'
};

osoba.fn2();

osoba.fn2('Seń');

osoba.fn2.bind(osoba2)();

osoba.fn2.bind(osoba2)('Seń');
osoba.fn2.bind(osoba2,'Kowalski','Drugie')();

console.log('CALL');
osoba.fn2.call(osoba2,'Tigran');

osoba.fn2.apply(osoba2,['Kowalski1']);


