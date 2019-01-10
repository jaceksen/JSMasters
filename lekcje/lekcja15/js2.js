//TRAVERSING DOM

// dynamic 
// ex. 1
console.log(document.body.children);

console.log(document.body.children[0]);

console.log(document.body.children[0].children[0]);

//ex. 2
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

console.log(document.body.firstElementChild.firstElementChild);

console.log(document.body.firstElementChild.firstElementChild.nextElementSibling);

console.log(document.body.firstElementChild.firstElementChild.parentElement);

// static

console.log(document.getElementsByTagName('li'));

console.log(document.getElementsByClassName('simple'));

console.log(document.getElementById('link3'));