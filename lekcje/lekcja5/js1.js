// arrays

var arr1 = [1,2,3,4];
console.log(arr1);
console.log(arr1[arr1.indexOf(1)]);

console.log(arr1[1]);
arr1[2] = 100;
console.log(arr1);

console.log(arr1[10]);

arr1[10] = 30;

console.log('7: ' + arr1[7]);
console.log(arr1);


var arr2 = [1,2,3,4,5,6,7];

for(let i=0; i<arr2.length; i++) {
    console.log(arr2[i]);
}

console.log('-----------');


arr2.forEach(element => {
    console.log(element);
});

arr2.forEach(function(element2) {
    console.log(element2);
});

arr2.push(111);

console.log(arr2);

arr2.unshift(222);

console.log(arr2);

arr2.pop();

console.log(arr2);

arr2.shift();
console.log(arr2);

// arr2[0]=null;
// console.log(arr2);

// console.log(arr2.indexOf(0));
// arr2[1] = 300;
arr2[2] = 'bbb';
arr2[arr2.indexOf(333)]=300;
arr2[arr2.indexOf('bbb')] = 'ccc';
arr2[arr2.indexOf(3333)]=200;
arr2[arr2.indexOf(5)]=200;
arr2[arr2.indexOf(2)]=200;
arr2[arr2.indexOf(200)]=300;
console.log(arr2);

var arr3 = [10,20,30,40,50,60,70,80];
console.log(arr3);
var newArr = arr3.splice(3);
console.log('arr3 ', arr3);
console.log('newArr ', newArr);

console.log('-----------');

arr3 = [10,20,30,40,50,60,70,80];
console.log(arr3);
var newArr2 = arr3.slice(2,4);
console.log('arr3 ', arr3);
console.log('newArr2 ', newArr2);





