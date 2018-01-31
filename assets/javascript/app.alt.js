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

    $("#concert-button").on("click", function () {
    event.preventDefault();
        var city = $("#location-input").val(); // ! << UNCOMMENT, GENERATE INPUT BOX & #ID AND MATCH TO $("#userInput")
        //  var city = "Chicago" // ! << UNCOMMENT TO HARDCODE
        var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=music&city=";
          getQuote(); // ! << CALL getQuote FUNCTION
        console.log(city);
        // AJAX call ----
        function getQuote() {
            $.get(queryURL + city + "&apikey=RAJIFQErgEgMNdIAtVrRj7Z6bAWPY0cl", function (data, status) {
                 console.log(data);
                 console.log(data._embedded.events[0].name);
                 console.log(data._embedded.events.length);
                for (var i = 0; i < 5; i++) {
                    var obj = data._embedded.events[i];
                    console.log(obj);
                    console.log(obj.name);
                  //  var div = $("<div>"); // Create a div
                  //  div.html(obj.name);
                //    $("#concert-results").append(div);
                    var artistName = $("<h5>").text(obj.name);
                    var artistURL = $("<a>").attr("href", obj.url).attr("target","_blank").append(artistName);
                    $("#").append(artistURL); // ! << UNCOMMENT & GENERATE/MATCH #ID
                    $("#concert-results").append(artistURL);
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

    //Yelp Search button click binding
    $("#food-button").on("click", function () {
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

    var queryURL = "https://api.yelp.com/v3/businesses/search?term=restaurant&location="+ city + "&categories=" + cuisineChoise;

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
          var img = $("<img>").attr("src", restImg).attr("class", "rest-img"); //creates image tag and adds image url and class for styling.
          var imgLink = $("<br><a href=" + obj.url +"></a><br>").attr("target","_blank") //creates link that directs to restaurant yelp page

          //adds restaurant name and adds it to link
          var restName = $("<h5>");
          restName.text(obj.name);

          // This adds restaurant header, image and link to page
          imgLink.append(restName);
          imgLink.append(img);

          $("#food-results").append(imgLink);
          clearFoodCard();
        }
      },

      })
    })

































})
