# Week 10 homework assignment

## LIRI Node App

- [x] Navigate to the root of your project and run npm init -y — this will initialize a package.json file for your project. The package.json file is required for installing third party npm packages and saving their version numbers. If you fail to initialize a package.json file, it will be troublesome, and at times almost impossible for anyone else to run your code after cloning your project.

![Image of axios-install2 created](/images/axios.jpg)

![Image of npm-installs created](/images/npm_installs.jpg)

- [x] Image of package.json:

![Image of package.json created](/images/package_json.jpg)

- [x] Make a .gitignore file and add the following lines to it. This will tell git not to track these files, and thus they won't be committed to Github.

node_modules
.DS_Store
.env

- [x] Make a JavaScript file named keys.js.

- [x] Inside keys.js your file will look like this:

- [x] console.log('this is loaded');

![Image of this-is-loaded created](/images/this_is_loaded.png)

- [x] exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

- [x] Next, create a file named .env, add the following to it, replacing the values with your API keys (no quotes) once you have them:

- [x] # Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

- This file will be used by the dotenv package to set what are known as environment variables to the global process.env object in node. These are values that are meant to be specific to the computer that node is running on, and since we are gitignoring this file, they won't be pushed to github — keeping our API key information private.

- If someone wanted to clone your app from github and run it themselves, they would need to supply their own .env file for it to work.

- [x] Make a file called random.txt.

- [x] Inside of random.txt put the following in with no extra characters or white space:

- spotify-this-song,"I Want it That Way"

- [x] Make a JavaScript file named liri.js.

- At the top of the liri.js file, add code to read and set any environment variables with the dotenv package:

- [x] require("dotenv").config();

- [x] Add the code required to import the keys.js file and store it in a variable.

- [x] You should then be able to access your keys information like so
  var spotify = new Spotify(keys.spotify);

- [x] Make it so liri.js can take in one of the following commands:

- concert-this
- spotify-this-song
- movie-this
- do-what-it-says

### What Each Command Should Do

- [x] node liri.js concert-this **artist/band name here**

- This will search the Bands in Town Artist Events API

- (https://rest.bandsintown.com/artists) + artist +'/events?app_id=codingbootcamp'

### For an artist and render the following information about each event to the terminal

- [x] Name of the venue

- Venue location
- Date of the Event (use moment to format this as "MM/DD/YYYY")

![Image of concert-this1 created](/images/concert-this1.png)

![Image of concert-this-default created](/images/concert-this-default.png)

- node liri.js spotify-this-song **song name here**

![Image of spotify-this created](/images/spoyify-this.png)

- This will show the following information about the song in your terminal/bash window

- Artist(s)

  - The song's name
  - A preview link of the song from Spotify
  - The album that the song is from

*If no song is provided then your program will default to "Paralyzed".

You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.

- The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:

- [x] Step One: Visit (https://developer.spotify.com/my-applications/#!)

- [x] Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

- [x] Step Three: Once logged in, navigate to

(https://developer.spotify.com/my-applications/#!/applications/create)
to register a new application to be used with the Spotify API.

- [x] You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

- [x] Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package.

- [x] node liri.js movie-this **movie name here**

This will output the following information to your terminal/bash window:
![Image of Movie-this created](/images/Movie-this.png)


- Title of the movie.
- Year the movie came out.
- IMDB Rating of the movie.
- Rotten Tomatoes Rating of the movie.
- Country where the movie was produced.
- Language of the movie.
- Plot of the movie.
- Actors in the movie.

- [x] If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

- [x] If you haven't watched "Mr. Nobody," then you should: (http://www.imdb.com/title/tt0485947)

- [x] It's on Netflix!

![Image of movie-this-default created](/images/movie-this-default.png)

_You'll use the axios package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use **trilogy**._

- [x]node liri.js do-what-it-says

### Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands

- [x] It should run spotify-this-song for **"I Want it That Way,"** as follows the text in random.txt.

Edit the text in random.txt to test out the feature for movie-this and concert-this.

### BONUS

- [ ] In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.

- [ ] Make sure you append each command you run to the log.txt file.

- [ ] Do not overwrite your file each time you run a command.
