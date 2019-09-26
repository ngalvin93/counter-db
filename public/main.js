const incrementButton = document.getElementById('increment')
const decrementButton = document.getElementById('decrement')
const resetButton = document.getElementById('reset')
const output = document.getElementById('counter')

incrementButton.addEventListener('click', incrementCounter)
decrementButton.addEventListener('click', decrementCounter)
resetButton.addEventListener('click', resetCounter)

function incrementCounter () {
    console.log('increment')
    fetch('/increment', {
        method: 'POST'
    })
        .then(function (response) {
            console.log(typeof response)
            return response.json()
        })
        .then(function (response) {
            console.log(typeof response)
            output.innerHTML = response
            return
        })
}

function decrementCounter () {
    console.log('decrement')
    console.log('increment')
    fetch('/decrement', {
        method: 'POST'
    })
        .then(function (response) {
            console.log(typeof response)
            return response.json()
        })
        .then(function (response) {
            console.log(typeof response)
            output.innerHTML = response
            return
        })
}

function resetCounter () {
    fetch('/reset', {
        method: 'POST'
    })
        .then(function (response) {
            console.log(typeof response)
            return response.json()
        })
        .then(function (response) {
            console.log(typeof response)
            output.innerHTML = response
            return
        })
}