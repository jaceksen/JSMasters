// DOM

console.log(window.innerWidth);

console.log(innerWidth);

console.log(outerWidth);

// local storage
console.log(localStorage);

// localStorage.setItem('nazwisko','Seń');
console.log(localStorage);

console.log(localStorage.getItem('nazwisko'));

sessionStorage.setItem('imie','Jacek');
console.log(sessionStorage.getItem('imie'));

localStorage.removeItem('nazwisko');

//DOM
console.log(window.document);

// window.open('https://www.google.com');

console.log(window.location);
console.log(location.hostname);
console.log(location.pathname);

//location.reload();
// location.replace('https://www.google.com');

console.log('----------');

console.log(document.URL);
console.log(document.title);
console.log(document.body);

console.log(document.body.children);
console.log(document.body.children[0]);

function zmienTekst() {
    document.body.children[0].textContent = 'Tralalala';
    document.body.children[0].style.backgroundColor = 'yellow';
}

setTimeout(zmienTekst, 3000);

