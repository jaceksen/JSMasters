//date

var dzisiaj = new Date();
console.log(dzisiaj);

var data2 = new Date(2018,11,5);
console.log(data2);

var data3 = new Date('2018/12/05');

// timestamp
console.log(Date.parse('2018/12/05'));
console.log(new Date('2018/12/05').getTime());
console.log(new Date('2018/12/05').valueOf());
