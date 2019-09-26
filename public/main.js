const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');
const output = document.getElementById('counter');

incrementButton.addEventListener('mousedown', incrementCounter);
decrementButton.addEventListener('mousedown', decrementCounter);
resetButton.addEventListener('mousedown', resetCounter);

function incrementCounter () {
    fetch('/increment', {
        method: 'POST'
    })
        .then(function (response) {
            //console.log(typeof response)
            return response.json();
        })
        .then(function (response) {
            //console.log(typeof response)
            output.innerHTML = response;
            return;
        });
};

function decrementCounter () {
    fetch('/decrement', {
        method: 'POST'
    })
        .then(function (response) {
            //console.log(typeof response)
            return response.json();
        })
        .then(function (response) {
            //console.log(typeof response)
            output.innerHTML = response;
            return;
        });
};

function resetCounter () {
    fetch('/reset', {
        method: 'POST'
    })
        .then(function (response) {
            //console.log(typeof response)
            return response.json();
        })
        .then(function (response) {
            //console.log(typeof response)
            output.innerHTML = response;
            return;
        });
};