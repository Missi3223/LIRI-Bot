
require("dotenv").config();
var keys = require("./key.js");
// Calls to BandsInTown and OMDB

// Date Formatting
var moment = require('moment');
// Spotify
var Spotify = require('spotify-web-api-node');
var spotify = new Spotify(keys.spotify);
var fs = require('fs');
// font colors package
var colors = require ('colors');
console.log (spotify);
// ---------------------------------------------------
//  declare variables that are limited 
let command = process.argv[2];
let name = process.argv[3];
let media_array = process.argv.slice(3);
let media = media_array.join(" ");
// ----------------------------------------------------
//  Commands for 'node file command <artist,band,movie>
function doThings(command, media) {
  switch (command) {

      case 'spotify-this-song':
          spotifyThis(media); break;
      case 'movie-this':
          movieThis(media); break;
      case 'concert-this':
          concertThis(media); break;
      case 'do-what-it-says':
          doWhatItSays(); break;
      default:
          console.log("Invalid command. Please type any of the following commands:");
          console.log(colors.magenta("concert-this,"), colors.cyan("spotify-this-song,"), colors.magenta("movie-this,"), colors.cyan("do-what-it-says"));
  }
};
  
doThings(command,media);