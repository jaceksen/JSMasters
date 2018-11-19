// filter - pobiera wybrane elementy tablicy
var arr1 = [1,2,3,4,5,6];

var filterArr1 = arr1.filter(value => {
    return value > 3;
});

console.log(arr1);
console.log(filterArr1);

console.log('---------------');

// map - pozwala coś zrobić z danymi elementami tablicy
arr1 = [1,2,3,4,5,6];
console.log(arr1);

var arr1Map = arr1.map(val => {
    return val*2;
});

console.log(arr1);
console.log(arr1Map);

console.log('---------------');

// reverse - odw kolejności

var arrRev = arr1.reverse();
console.log(arrRev);