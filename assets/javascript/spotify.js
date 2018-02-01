// Button click listener for the submit button
$('#music-button').on('click', function() {
	event.preventDefault();
  
  // Set the value in the input box as the category variable
  var category = $('#music-input').val().trim();
  console.log(category);
  // While the playlist is being grabbed a loader is displayed
  $('.loader').toggleClass('show');

  // Storing the Spotify API URL for playlists of a specific category
  var queryURL = 'https://api.spotify.com/v1/browse/categories/' + category + '/playlists';

  // Perfoming an AJAX GET request to our queryURL
  $.ajax({
    url: queryURL,
	// Auth token required by Spotify is provided.
	headers: {
	     'Authorization': 'Bearer ' + accessToken
	 },
	method: 'GET',
  // Once the get request completes the following runs
  }).then(function(response) {
    // Grab the IDs of the playlists that are returned from Spotify
  	var playlistIds = [response.playlists.items[0].id, response.playlists.items[1].id, response.playlists.items[2].id, response.playlists.items[3].id, response.playlists.items[4].id];
	// This function chooses a random number from 1-5 so we can grab a random playlist ID
	function getRandomPlaylist() {
     var randoNum = Math.floor(Math.random() * playlistIds.length);
     return playlistIds[randoNum];
     console.log(playlistIds[randoNum]);
   }
    
    // This for loop grabs the random playlist ID using the getRandomPlaylist function and set it equal to the randomPlaylist variable.
    var randomPlaylist = [];
  	  for (let i = 0; i < 1; i++) {
	    randomPlaylist.push(getRandomPlaylist(playlistIds));
	    console.log(randomPlaylist);
	  }

    // Insert the randomPlaylist ID into the URL needed to pull the playlist from Spotify.
	var baseUrl = 'https://open.spotify.com/embed?uri=spotify%3Auser%3Aspotify%3Aplaylist%3A' + randomPlaylist + '&theme=white';
    // While the playlist is loading the loader icon will show.
	$('.loader').toggleClass('show');
    // Insert the iframe with with playlist into the HTML file to display to the user
	$('.playlist').html(`<iframe src="${baseUrl}" width="300" height="350" frameborder="0" allowtransparency="true"></iframe>`);

})

});

