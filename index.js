const Twitter = require('twit');
import * as dotenv from 'dotenv';

dotenv.config();

// Replace these with your own API keys and access tokens
const T = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

// find a random tweet and 'favorite' it
var favoriteTweet = function () {
    var params = {
        q: '#nodejs, #Nodejs',  // REQUIRED
        result_type: 'recent',
        lang: 'en'
    }

    // find the tweet
    Twitter.get('search/tweets', params, function (err, data) {

        // find tweets
        var tweet = data.statuses;
        var randomTweet = ranDom(tweet);   // pick a random tweet

        // if random tweet exists
        if (typeof randomTweet != 'undefined') {
            // Tell TWITTER to 'favorite'
            Twitter.post('favorites/create', { id: randomTweet.id_str }, function (err, response) {
                // if there was an error while 'favorite'
                if (err) {
                    console.log('CANNOT BE FAVORITE... Error');
                }
                else {
                    console.log('FAVORITED... Success!!!');
                }
            });
        }
    });
}
// grab & 'favorite' as soon as program is running...
favoriteTweet();
// 'favorite' a tweet in every 60 minutes
setInterval(favoriteTweet, 3600000);