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

    //gather input values via a new object (ajax will be happy it's an object)
    let newJoke = {
        whoseJoke: $( '#whoseJokeIn' ).val(),
        jokeQuestion: $( '#questionIn' ).val(),
        punchLine: $( '#punchlineIn' ).val()
    }

    //we need to add this newJoke to the existing jokes array on client side
    //push into jokes
    //Make a POST request with newJoke as the 'data:' (remember: data should always be an object)
    $.ajax({
        url: '/jokes',
        method: 'POST',
        //with POST requests we need a third variable called 'data:'
        data: newJoke //this becomes req.body on the server side
    }).then(response => {
        console.log(response)

        getJokes();
    }).catch(function (error) {
        console.log(error)
        alert('Something went wrong with POST, try again.')
    })
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
            <div id="joke">
                <b>${joke.whoseJoke}'s Joke:</b>
                <p><em>${joke.jokeQuestion}</em></p>
                <p>Punchline: ${joke.punchLine}</p>
            </div>
            `)
        }
    })
}