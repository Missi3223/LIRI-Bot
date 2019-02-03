// require("dotenv").config();
// node for spotify API
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "<9551e5a766a9442085871180e80883aa>",
  secret: "<ebe5b808d24a4b009fc9cc0a8547410d>"
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

// Axios for OMBD API
var axios = require ("axios");
axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=12bce0c7").then(function(response){
    console.log("The movie is rated " + response.data.imbdRating);
}
);

// Axios for Bands In Town API
var axios = require ("axios");
axios.get("URL for bandsintown").then(function(response){
    console.log("????");
}
);

// node for Moments
var moment = require('moment');
moment().format();
// var spotify = new Spotify(keys.spotify);
// 	// Node module imports needed to run the functions
// 	var fs = require("fs"); //reads and writes files
// 	var request = require("request");
// 	var keys = require("./keys.js");
// 	var twitter = require("twitter");
// 	var spotify = require ("spotify");
// 	var liriArgument = process.argv[2]