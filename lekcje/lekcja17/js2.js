let http = new XMLHttpRequest();
let url = 'http://jsonplaceholder.typicode.com/posts';
let method = 'POST';

let data = 'title=Tralala&body=Treść';

http.open(method,url);
http.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
http.onreadystatechange = () => {
    if(http.readyState === XMLHttpRequest.DONE && http.status === 201) {
        console.log(JSON.parse(http.responseText));
    } else {
        console.log('Cuś nie tak');
    }
};

http.send(data);