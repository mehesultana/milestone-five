function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// handle blue button click by setting function name
const blueButton = document.getElementById('make-blue-button');
// just set the name of the function
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
