// https://jsonplaceholder.typicode.com/posts

// https://openweathermap.org/

// AJAX/XMLHttpRequest

let http = new XMLHttpRequest();
let url = 'http://jsonplaceholder.typicode.com/posts';
let method = 'GET';

http.open(method, url);
http.onreadystatechange = () => {
    if(http.readyState === XMLHttpRequest.DONE && http.status === 200) {
        console.log(JSON.parse(http.responseText)[0].title);
    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
        console.log('Wyjebunda!!!');
    } 
};

http.send();