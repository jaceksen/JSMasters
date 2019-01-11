let a = document.querySelectorAll('a')[1];
let b = document.querySelectorAll('a')[2];
let c = document.querySelectorAll('a')[0];

a.parentElement.removeChild(a);

b.remove();

let d = document.querySelectorAll('li')[1];
let e = document.querySelectorAll('li')[2];

let newA = document.createElement('a');
// let newAText = document.createTextNode('nowy link');
newA.textContent = 'tralalala';
newA.setAttribute('href','https://www.google.pl/');
// newA.appendChild(newAText);

d.appendChild(newA);

// alert('This is alert');
// confirm('Pytnaie?');

// console.log(confirm('Pytanie?'));

// prompt('Imię?');

// console.log(prompt('Imię?'));