var condition = true;

if(condition) {
    console.log('dzialam');
} else {
    console.log('nie dzialam');
}
// dzialam

var condition2 = 2;

if(condition2) {
    console.log('dzialam 2');
} else {
    console.log('nie dzialam 2');
}
// dzialam2

console.log(1 == true);
// true
console.log(1 === true);
// false
console.log(2 == true);
// false

// ************** switch 

var numer = 125;

switch(numer) {
    case 1: 
        console.log('jeden');
        break;
    case 5:
        console.log('pięć');
        break;
    case 125:
        console.log('tttt');
        break;
    default:
        console.log('default');
        break;
}

// *********** loop

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let zmienna = 0;
// for(;;) {
//     console.log('coś ' + zmienna);
//     zmienna++;
//     if(zmienna === 7) {
//         break;
//     }
// }

for(let i = 0; i < 7; i++) {
    if(i === 3) {
        continue;
    }
    console.log('i = ' + i);
}
// bez i=3

for(let  i=0; i < 5; i++) {
    for(let j=0; j < 2; j++) {
        if(i === 2) {
            break;
        }
        console.log('j1 = ' + j + ' ' + i);
    }
    console.log('i22 = ' + i);
}

// var tab = [1, 2, 3, 10, '333', 'napis'];

// for(let i = 0; i < tab.length; i++) {
//     console.log(tab[i]);
// }

let z = 0;

while(z < 5) {
    console.log('z = ' + z);
    z++;
}

while(true) {
    console.log('z2 = ' + z);
    if(z === 10) {
        break;
    }
    z++;
}

do {
    console.log('wykonany');
} while (z > 1500); 
