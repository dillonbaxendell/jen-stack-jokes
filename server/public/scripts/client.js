console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
}


function getJokes() {
    console.log( 'in getJokes' );

    // We need an ajax call here:
    // Go to server via route /jokes
    // This should match the app.get('/jokes') on server side
    $.ajax({
        method: 'GET',
        url: '/jokes'
    }).then(function (response) {
        console.log(response);
    })
}