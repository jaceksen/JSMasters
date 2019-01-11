// window.onload = () => console.log('okno załadowane');

// window.onload = function() {
//     console.log('okno załadowane');
// };

// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload

let btn = document.querySelector('button');

btn.onclick = () => console.log('Przycisk kliknęty');
btn.onclick = () => {console.log('Button was clicked 2');};