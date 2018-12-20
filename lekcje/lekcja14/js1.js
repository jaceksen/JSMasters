var id=0;
var id2=0;
var seconds = 0;

function start() {
    id = setTimeout(() => {printMsg('trrrr');}, 3000);
}

function printMsg(parametr) {
    document.getElementById('op').innerHTML=parametr;
}


function stop() {
    clearTimeout(id);
    document.getElementById('op').innerHTML='Jakiś tekst';
}

function start2() {
    id2 = setInterval(printMsg2, 1000);
}

function printMsg2() {
    document.getElementById('op').innerHTML = 'Minęło ' + seconds + ' sekund';
    seconds++;
}

function stop2() {
    clearInterval(id2);
}