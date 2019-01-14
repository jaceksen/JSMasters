var inner = document.querySelector('#inner');
var outer = document.querySelector('#outer');

inner.addEventListener('click', innerListener);
outer.addEventListener('click', outerListener, true);

function outerListener(event) {
    console.log('Clicked outer');
}

function innerListener(event) {
    console.log('Clicked inner');
}
