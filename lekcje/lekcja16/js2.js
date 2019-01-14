let btn = document.querySelector('button');

function listener1() {
    console.log('listener 1');
}

let listener2 = () => console.log('listener2');


btn.addEventListener('click', listener1);
btn.addEventListener('click', listener2);

setTimeout(() => {btn.removeEventListener('click',listener2)},4000);




