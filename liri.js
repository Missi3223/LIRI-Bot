
require("dotenv").config();
var axios = require("axios");
var keys = require("./key.js");
// Calls to BandsInTown and OMDB
var request = require('request');
// Date Formatting
var moment = require('moment');
// Spotify
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var fs = require('fs');
// font colors package
var colors = require ('colors');

// ---------------------------------------------------
//  declare variables that are limited 
let command = process.argv[2];
// let nameSearch = process.argv[3];
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
}
// calling spotify function 
  function spotifyThis(media){
// default value when no value
    if (media == ""){
      media = "Paralyzed"
  }
// search spotify library
spotify.search({
  type: 'track', query:media, limit: 1 })
    .then(function(response){
    var song = response.tracks.items[0];
    if (song != undefined){
      console.log ();
      console.log (colors.cyan( " SONG NAME "));
      console.log (colors.magenta("*** " + song.name + " ***"));

      console.log (colors.cyan(" ARTIST or BAND "));
      for (i = 0; i < song.artists.length; i++){
        console.log (colors.magenta ("*** " +song.artists[i].name +" ***"));
      }
      console.log (colors.cyan(" ALBUM "));
      console.log (colors.magenta("*** " +song.album.name + " ***"));
      

      console.log (colors.cyan(" PREVIEW LINK "));
      console.log (colors.magenta("*** " +song.preview_url + " ***"));
      console.log ();
      
    }
      
  })
  
  .catch (function(error){
     console.log (error);
  })
  };
  
  function concertThis(media){
    //if no media given
    if (media == ""){
    media = "Hinder"
  }

  
  request ("https://rest.bandsintown.com/artists/" + media + "/events?app_id=codingbootcamp", function (error, response, data){
    try{
      var response = JSON.parse(data)
      if (response.length != 0){
        console.log(colors.cyan (" Upcoming events for " + media + " include: "))
        response.forEach(function(element){
          console.log (colors.magenta("Venue: " + element.venue.name));
        if (element.venue.country == "United States"){
          console.log(colors.magenta(" City: " + element.venue.city + "," + element.venue.region));
        }
          else{
            console.log(colors.magenta(" City: " + element.venue.city + "," + element.venue.country));
          }
        console.log(colors.magenta(" Date: " + moment(element.datetime).format("MM/DD/YYYY")));
        console.log();
        })
      }else {
        console.log(colors.red(" You didn't need to go anyway."));
      }
    }
    catch(error){
      console.log(colors.red("No concerts for you!"));
    }
  })
  }
  function movieThis(media){
    if (media == ""){
      media = "Mr. Nobody"
    }
    console.log(media)
    request("http://www.omdbapi.com/?t=" + media + "&apikey=trilogy", function (error, response, data){
     try{
       var response = JSON.parse(data)
       if (response.Title != undefined){
         console.log (colors.cyan("If you haven't watched 'Mr. Nobody.' then you should " + "http://www.imdb.com/title/tt0485947" ));
         console.log (colors.cyan("It's on Netflix"));
         console.log(colors.cyan(" MOVIE NAME " ));
         console.log(colors.magenta(response.Title));
         
         console.log(colors.cyan(" YEAR "));
         console.log(colors.magenta(response.Year));
         

         console.log (colors.cyan(response.Ratings[0].Source + " RATING"));
         console.log (colors.magenta(response.Ratings[0].Value));
    
         console.log(colors.cyan(response.Ratings[1].Source + " RATING 2"));
         console.log(colors.magenta(response.Ratings[1].Value));
     
       
        console.log(colors.cyan(" COUNTRY "));
        console.log(colors.magenta(response.Country));

        console.log (colors.cyan(" LANGUAGE "));
        console.log (colors.magenta(response.Language));

        console.log (colors.cyan(" PLOT "));
        console.log(colors.magenta(response.Plot));

        console.log (colors.cyan(" ACTORS "));
        console.log (colors.magenta(response.Actors));
        console.log ();
     }
    
     else {
       console.log (colors.red(" Ummmm, that is not a movie. "));
     }
    }
    catch(error){
      console.log(colors.red(" Movie not found. "));
    }
  });
}
function doWhatItSays(){
  fs.readFile("random.txt", "utf8", function (error, response){
    if (error){
      console.log (error);
    }
    let params = (response.split(','));
    doThings(params[0],params[1]);
  })
}  
   
doThings(command,media);