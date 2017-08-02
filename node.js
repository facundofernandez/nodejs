var Twit = require('twit');
var HashtagCount = require('hashtag-count');


var T = new Twit({
  consumer_key:         'zBvZ2dnWQzEXwcI5WtuqQ22dr',
  consumer_secret:      'mBW6SZTPnVg9Hxbw1qjKwCDKtI9jj45cj9neKwc3GzCjwUzCox',
  access_token:         '187707744-21wlzlOgWNbpjiuK5DFFLaGQBU61sPCCJiKHWIHo',
  access_token_secret:  'PyQY0ad7GIiwJAioe023Z2ymdvSRxloHTuEPHMXQ0spBZ'
});

var hc = new HashtagCount({
  consumer_key:         'zBvZ2dnWQzEXwcI5WtuqQ22dr',
  consumer_secret:      'mBW6SZTPnVg9Hxbw1qjKwCDKtI9jj45cj9neKwc3GzCjwUzCox',
  access_token:         '187707744-21wlzlOgWNbpjiuK5DFFLaGQBU61sPCCJiKHWIHo',
  access_token_secret:  'PyQY0ad7GIiwJAioe023Z2ymdvSRxloHTuEPHMXQ0spBZ'
});

var numero = 0;

T.get('search/tweets', { q: '#martesintratables',count: 1000000 }, function(err, data, response) {
  numero = data.statuses.length
});



var stream = T.stream('statuses/filter', { track: '#martesintratables'})

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



var hashtags = ['martesintratables'];
var interval = '30 seconds';
// Stop running after this amount of time has passed. 
var limit = '1 minutes';
 
// Called after time limit has been reached. 
var finishedCb = function (err, results) {
  if (err) {
    console.error(err);
  } else {
    console.log(results);
  }
};
 
// Open a connection to Twitter's Streaming API and start capturing tweets! 
hc.start({
  hashtags: hashtags,       // required 
  interval: interval,       // required 
  limit: limit,             // optional 
  finishedCb: finishedCb   // optional 
});