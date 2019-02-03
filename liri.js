
// node for spotify API
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "<process.env.SPOTIFY_ID>",
  secret: "<process.env.SPOTIFY_SECRET>"
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
// var axios = require ("axios");
// axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=a5033557-3237-4549-94e6-df109ca8d2fb").then(function(response){
//     console.log(response);
// }
// );
// node for Moments
var moment = require('moment');
moment().format();

// require Dotenv
require("dotenv").config();

// var spotify = new Spotify(keys.spotify);
// 	// Node module imports needed to run the functions
  var fs = require("fs"); 
  var text = process.argv[2];
  fs.appendFile("random.txt",text,function(err){
    if (err){
      console.log(err);
    }
    else{
      console.log("It Works!!")
    }
  });
  
  //reads and writes files
// 	var request = require("request");
// 	var keys = require("./keys.js");
// 	var twitter = require("twitter");
// 	var spotify = require ("spotify");
// 	var liriArgument = process.argv[2]