const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const PORT = 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));

let jokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "I went to the zoo the other day, it had one dog...",
    punchLine: "It was a shih tzu."
  }
];

// serve back static files
app.use(express.static('server/public'));


//API

//grab the POST via /jokes to add to the jokes array
app.post( '/jokes', (req, res) => {
  //add the incoming joke to our jokes array
  //reminder: this is info coming from our Client
  console.log(req.body); //this is the data: from ajax

  //push what we received (req.body) into the array
  jokes.push(req.body);

  //send back a good response
  res.sendStatus(201);
});

//Reminder: GET is for getting existing data
//GET the jokes array to the Client so we can eventually append it to the DOM
app.get( '/jokes', (req, res) => {
  console.log( 'got to /jokes' );

  //respond
  //whatever is in res.send is what response is on client.js file
  res.send( jokes );

})

app.listen(PORT, () => {
  console.log('server running on: ', PORT);
}); // end spin up server
