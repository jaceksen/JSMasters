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

console.log('concat - łączenie tablic');
arr1 = [1,2,3,4,5];
arr2 = ['trlalala','bbbb'];

var conArr = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(conArr);


// join - tworzy string i określa jaki ma być separator
console.log('join');
array = [1,2,3,4,5];
var joinArray = array.join(' | ');
console.log(array);
console.log(joinArray);


// reduce - bierze dwa argumenty total i value
// redukuje array to jednej wartości
console.log('reduce');

array = [1,2,3,4];
console.log(array);
var redArray = array.reduce((total, value) => {
    console.log('tot: ', total);
    console.log('val: ', value);
    return total + value;
});
console.log(array);
console.log(redArray);
