var Twit = require('twit');
var Config = require('./config');

var hashtag = "animalessueltos";

var T = new Twit({
  consumer_key:         Config.CONSUMER_KEY,
  consumer_secret:      Config.CONSUMER_SECRET,
  access_token:         Config.ACCESS_TOKEN,
  access_token_secret:  Config.ACCESS_TOKEN_SECRET
});

var numero = 0;

T.get('search/tweets', { q: '#' + hashtag }, function(err, data, response) {
  numero = data.statuses.length;
  console.log(data.statuses)
});

var stream = T.stream('statuses/filter', { track: '#' + hashtag})

stream.on('tweet', function (tweet) {
    console.log("----------------------------------------------------------------");
    console.log("usuario: " + tweet.user.name);
    console.log("----------------------------------------------------------------");
    console.log(tweet.text);
    console.log("----------------------------------------------------------------");
    numero = numero +1;
    console.log("Numero de twitts: " + numero)
    console.log("----------------------------------------------------------------");
    console.log("----------------------------------------------------------------");
    console.log("----------------------------------------------------------------");
});
