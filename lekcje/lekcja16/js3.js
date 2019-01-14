let inner = document.querySelector('#inner');
let outer = document.querySelector('#outer');

inner.addEventListener('click', innerListener);
outer.addEventListener('click', outerListener);


function outerListener(event) {
    console.log('Clicked outer');
    // console.log('OUTER: ', event.bubbles);
}

function innerListener(event) {
    // console.log(event.target);

    if(event.target.style.backgroundColor === 'yellow') {
        event.target.style.backgroundColor = 'red';
    } else {
        event.target.style.backgroundColor = 'yellow';
    }

    console.log('X:', event.clientX);
    console.log('Y:', event.clientY);

    console.log(event.bubbles);

    event.stopPropagation();

    console.log('Clicked inner');
}