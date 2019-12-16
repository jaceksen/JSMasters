// spread operator

const fn1 = (...n) => {
    console.log(n);
};

fn1(10,20,30,40,50);

const fn2 = (a, b, c, ...n) => {
    console.log(a,b,c,n);
};

fn2(1,2,'ce',10,20,'aaa');

const tab1 = [1,2,3];
const tab2 = [1,2,3];
const tab3 = [4,5,6];

const w1 = tab1.push(tab2);
const w2 = tab2.push(...tab3);

console.log(w1);
console.log(w2);

console.log(tab1);
console.log(tab2);

console.log(Math.max(tab2));
console.log(Math.max(...tab2));

//For Of Loop

const wyniki = [1.1, 30, 22, 5345];

for(let i=0; i<wyniki.length; i++) {
    console.log(i,wyniki[i] );
}

for(let wynik of wyniki){
    console.log(wynik);
}







