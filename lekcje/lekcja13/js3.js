// dla Leny ;-)
// regex

var string = 'abc';

var pattern = /ab/;

console.log(pattern.exec(string));

string ='ac';
console.log(pattern.exec(string));

string ='abab';
console.log(pattern.exec(string));

console.log(pattern.test(string));

console.log(string.match(pattern));






