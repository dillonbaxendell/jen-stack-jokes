console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');

    //Click Listeners

    //add a Joke upon hitting the 'Add Joke' button
    $( '#addJokeButton').on( 'click', addJoke );

    //get the Jokes to the DOM
    getJokes();
}

function addJoke() {
    console.log( 'clicked Add Joke!' );
    
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

        //We also need to append this info to the DOM, but first:
        //empty the DOM
        $( '#outputDiv' ).empty();

        //Now append the jokes to the DOM
        for (let joke of response) {
            $( '#outputDiv' ).append(`
                <b>${joke.whoseJoke}'s Joke:</b>
                <p>${joke.jokeQuestion}</p>
                <p>Punchline: ${joke.punchLine}</p>
            `)
        }
    })
}