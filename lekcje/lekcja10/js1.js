var konto = {
    kasa: 12000,
    wyplata: function(liczba) {
        this.kasa -= liczba;
        console.log('Wybrano ' + liczba + ', zostalo ' + this.kasa);
    }
};

konto.wyplata(2000);

// dodawanie funkcji do obiektu
Object.defineProperty(konto, 'wplata', {
    value: function(liczba) {
        console.log('Dodaję ' + liczba);
        this.kasa += liczba;
    }
});

konto.wplata(3000);
konto.wyplata(1000);

Object.defineProperty(konto, 'name', {
    value: 'ID0001'
});

console.log(konto.name);

konto.name = 'ID0002';
console.log(konto.name);

Object.defineProperty(konto, 'nazwisko', {
    value: 'Seń',
    writable: true
});

console.log(konto.nazwisko);
konto.nazwisko = 'Szymanek';
console.log(konto.nazwisko);

// getters, setters
Object.defineProperty(konto, 'mojaFunkcja', {
    get: function() {
        return 'Odpalona jakaś funkcja';
    }
});

console.log(konto.mojaFunkcja);

console.log('--------------------');

var obj = {
    imie: 'Jacek',
    _nazwisko: 'Default'
};

console.log(obj);

Object.defineProperty(obj, 'nazwisko', {
    get: function() {
        return this._nazwisko;
    },
    set: function(nazwisko) {
        if(nazwisko === 'Avetyan') {
            this._nazwisko = nazwisko;
        }
    }
});

console.log(obj.nazwisko);
obj.nazwisko = 'Avetyan';
console.log(obj.nazwisko);

var bbb = {
    nazwisko: function() {
        console.log('dd');
    }

}