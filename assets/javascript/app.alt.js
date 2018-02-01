//==============================================================
//
//   ####   #####   ##     ##   ####  #####  #####    ######
//  ##     ##   ##  ####   ##  ##     ##     ##  ##     ##
//  ##     ##   ##  ##  ## ##  ##     #####  #####      ##
//  ##     ##   ##  ##    ###  ##     ##     ##  ##     ##
//   ####   #####   ##     ##   ####  #####  ##   ##    ##
//
//==============================================================

$(function () {

$(function () {

      $("#concert-button").on("click", function () {
        event.preventDefault();
        var city = $("#location-input").val();
        //  var city = "Chicago" // ! << Uncomment to hardcode city
        var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?&endDateTime=2018-02-03T00:00:00Z&keyword=music&city=";

        // Call function
        getQuote();

        // AJAX call ----
        function getQuote() {
          $.get(queryURL + city + "&apikey=RAJIFQErgEgMNdIAtVrRj7Z6bAWPY0cl", function (data, status) {

            // ! Debug
            console.log(data);
            console.log(data._embedded.events[0].name);
            console.log(data._embedded.events[0].images[0].url);
            console.log(data._embedded.events.length); // Number of events in array 
            // ! Debug

            // For Loop 
            for (var i = 0; i < 8; i++) {
              var concertId = data._embedded.events[i];
              // console.log(obj);
              // console.log(obj.dates.start.localDate);
              // ! Debug
              //    var div = $("<div>"); // Create a div
              //    div.html(obj);
              //    console.log(obj);
              //    $("#concert-results").append(div);
              // ! debug

              // Variables
              var artistName = $("<h5>").text(concertId.name);
              var artistImage = $("<img>").attr("src", concertId.images[0].url);
              var artistURL = $("<a>").attr("href", concertId.url).attr("target", "_blank").append(artistName);
              var venue = $("<p>").text(concertId._embedded.venues[0].name);
              //var artistImage = obj.images[i].url;

              // Results appended to document
              $("#concert-results").append(artistImage);
              $("#concert-results").append(artistURL);
              $("#concert-results").append(venue);
              // ! Copy and paste url & add a city in the search to see a test example: ("file:///C:/Users/Dan/Documents/Northwestern/bandify/index.html")
            }
          })
        }
      })
    //=======================================================================================
    //
    //  ##    ##  #####  ##      #####          ####    #####     #####   ##   ##  #####
    //   ##  ##   ##     ##      ##  ##        ##       ##  ##   ##   ##  ##   ##  ##  ##
    //    ####    #####  ##      #####         ##  ###  #####    ##   ##  ##   ##  #####
    //     ##     ##     ##      ##            ##   ##  ##  ##   ##   ##  ##   ##  ##
    //     ##     #####  ######  ##             ####    ##   ##   #####    #####   ##
    //
    //=======================================================================================
    function clearBarCard() {
      //empties textbox from user input
      $("#city-input").empty();
      $("#cuisine-input").empty();
    };

    //Yelp Search button click binding
    $("#bar-button").on("click", function() {
      event.preventDefault();
      /**
       * ! AJAX PREFILTER -- DO NOT CHANGE ----------------------------------------v
       **/

      jQuery.ajaxPrefilter(function(options) {
        if (options.crossDomain && jQuery.support.cors) {
          options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
      });

      /**
       * ! AJAX PREFILTER  DO NOT CHANGE ------------------------------------------^
       **/

      // AJAX CALL

      // creating variables of user inputs
      var city = $("#city-input").val().trim().toLowerCase();
      var cuisineChoise = $("#cuisine-input").val().trim().toLowerCase();
      // use variables below when testing api functionality
      // var city = "Chicago";
      // var cuisineChoise = "mexican";

      // holds API parameters to find the following= Bars, open now, in user inut city and cuisine choice
      var queryURL = "https://api.yelp.com/v3/businesses/search?term=bars&open_now=true&location=" + city + "&categories=" + cuisineChoise;

      $.ajax({
        type: "GET",
        url: queryURL,
        dataType: "json",
        headers: {
          "Authorization": "Bearer " +
            "3uLaVQrJwP21kaJjuErLNk5QE9TTtwtFA7LErPkhI32wZg6PYKUll05F-9_fkoK45CnUZ6qyVOXkvHGjRK-9ajm-CtR9J3r7d5zMfcl72IUJbtLy8yUpSZ-uHlpmWnYx"
        },
        success: function(response) {
          // returns 5 restaurants to the Food Card in index.html
          for (var i = 0; i < 5; i++) {
            var obj = response.businesses[i];
            // console.log(obj); //returns restaurant object

            // Creates clickable image that opens in yelp
            var restImg = obj.image_url; //stores business image link.
            //creates image tag and adds image url and class for styling.
            var img = $("<img>").attr("src", restImg).attr("class", "rest-img");
            //store address
            var address = $("<p class='text-white'>" + obj.location.display_address + "</p>");
            //creates link that directs to restaurant yelp page
            var imgLink = $("<br><a href=" + obj.url + "></a><br>").attr("target", "_blank");

            //adds restaurant name and adds it to link
            var restName = $("<h5>");
            restName.text(obj.name);

            // This adds restaurant header, image, address and link to page
            imgLink.append(restName);
            imgLink.append(address);
            imgLink.append(img);

            $("#bar-results").append(imgLink);
            clearBarCard(); //resets user input fields

          }
        }

      })
    }); //closing for $("#bar-button") click binding

    // Reset button click binding
    $("#barReset-button").on("click", function () {
      $("#bar-results").empty();
    });































}); 
})
//End of Page Ready Function
