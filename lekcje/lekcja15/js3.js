console.log(document.querySelector('h1'));

console.log(document.querySelectorAll('h1'));

console.log(document.querySelector('.simple'));

console.log(document.querySelector('#link3'));

document.querySelector('h1').style.background = 'red';

// create elemnt

let p = document.createElement('P');
p.textContent = 'Zajebisty paragraf';
p.style.fontSize = '17px';

var li = document.querySelector('li');
console.log('----',li);

li.appendChild(p);

let p2 = document.createElement('P');
p2.textContent = 'Kolejny paragraf';

let a = document.querySelector('a');

li.insertBefore(p2, a);

b = document.querySelectorAll('a')[2];

