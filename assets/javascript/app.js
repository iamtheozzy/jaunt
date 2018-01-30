/**
* !
*! NOTE: Errors expected due to commented out code--Please double check errors are resolved after removing comments
*!
**/
//=====================================
//
//  ##    ##  #####  ##      #####
//   ##  ##   ##     ##      ##  ##
//    ####    #####  ##      #####
//     ##     ##     ##      ##
//     ##     #####  ######  ##
//
//=====================================
/**
*! NOTE: Errors expected at 15/51/59  due to commented out code--Please double check errors are resolved after removing comments
**/

// DOCUMENT READY
$(function() {

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
  // var city = $("#city-input").val().trim();
  // var cuisineChoise = $("#cuisine-input").val().trim();
  var city = "Chicago";
  var cuisineChoise = "mexican";
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
      for (var i = 0; i < 5; i++) {
        var obj = response.businesses[i];
        console.log(obj);
        var div = $("<div>");

        var restImg = obj.image_url; //stores business image link.
        var img = $("<img>").attr("src", restImg).attr("class", "rest-img"); //creates image tag and adds image url and class for styling.
        var imgLink = $("<br><a href=" + obj.url +"></a><br>")
        imgLink.append(img)
        // img.attr("src", restImg);
        // img.attr("class", "rest-img");


        $("#food-card-expanded").append(imgLink);

      }
    },

    })
  })
})

//==================================================================================================
//
//  ######  ##   ####  ##  ##  #####  ######  ###    ###    ###     ####  ######  #####  #####
//    ##    ##  ##     ## ##   ##       ##    ## #  # ##   ## ##   ##       ##    ##     ##  ##
//    ##    ##  ##     ####    #####    ##    ##  ##  ##  ##   ##   ###     ##    #####  #####
//    ##    ##  ##     ## ##   ##       ##    ##      ##  #######     ##    ##    ##     ##  ##
//    ##    ##   ####  ##  ##  #####    ##    ##      ##  ##   ##  ####     ##    #####  ##   ##
//
//==================================================================================================
$(function () {
// $("#SEARCH BUTTON").on("click", function () {
  // var city = $("#userInput").val(); // ! << UNCOMMENT, GENERATE INPUT BOX & #ID AND MATCH TO $("#userInput")
 //  var city = "Chicago" // ! << UNCOMMENT TO HARDCODE
    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=music&city=";
 //  getQuote(); // ! << CALL getQuote FUNCTION

    // AJAX call ----
    function getQuote() {
        $.get(queryURL + city + "&apikey=RAJIFQErgEgMNdIAtVrRj7Z6bAWPY0cl", function (data, status) {
        //    console.log(data);
        //    console.log(data._embedded.events[0].name);
        //    console.log(data._embedded.events.length);
            for (var i = 0; i < 5; i++) {
                var obj = data._embedded.events[i];
                    console.log(obj);
                    console.log(obj.name);
                var div = $("<div>"); // Create a div
                    div.html(obj.name);
                         $("#well-section").append(div);
                var artistName = $("<h1>").text(obj.name);
                var artistURL = $("<a>").attr("href", obj.url).append(artistName);
               // $("#url-displayed-in-an-<h1>-tag").append(artistURL); // ! << UNCOMMENT & GENERATE/MATCH #ID

// ! Copy and paste url & add a city in the search to see a test example: ("file:///C:/Users/Dan/Documents/Northwestern/bandify/index.html")
            }
        })
    }
//===========================================================
//
//  ##        ###     ####  ######      #####  ###    ###
//  ##       ## ##   ##       ##        ##     ## #  # ##
//  ##      ##   ##   ###     ##        #####  ##  ##  ##
//  ##      #######     ##    ##        ##     ##      ##
//  ######  ##   ##  ####     ##    ##  ##     ##      ##
//
//===========================================================

$(function () {
//  $("#getQuote").on("click", function () { // ! << UNCOMMENT & GENERATE/MATCH BUTTON #ID
        var queryURL = "http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=9ece61cd5921f21d347c960c0218b3bd&format=json"
        //  var apikey = ("9ece61cd5921f21d347c960c0218b3bd") // ! << STORAGE ONLY -- NO NEED TO UNCOMMENT
        getQuote(); // ! <<  CALL getQuote FUNCTION
        // AJAX call ----------------------------------------
        function getQuote() {
            $.get(queryURL, function (data, status) {
                console.log(data);
                for (var i = 0; i < 5; i++) {
                    var obj = data.tracks.track[i];
                    console.log(obj);
                    var div = $("<div>");
                    div.html(obj.name);
                    $("#well-section").append(div);
                    // ! Added url ===========================
                    var artistName = $("<h4>").text(obj.name);
                    var artistURL = $("<a>").attr("href", obj.url).append(artistName);
                    $("#well-section").append(artistURL); // ! << UNCOMMENT & GENERATE/MATCH  #ID

                }
            })
        }
})
//================================================================================
//
//   ####    #####      ###     ####  #####  ##     ##   #####   ######  #####
//  ##       ##  ##    ## ##   ##     ##     ####   ##  ##   ##    ##    ##
//  ##  ###  #####    ##   ##  ##     #####  ##  ## ##  ##   ##    ##    #####
//  ##   ##  ##  ##   #######  ##     ##     ##    ###  ##   ##    ##    ##
//   ####    ##   ##  ##   ##   ####  #####  ##     ##   #####     ##    #####
//
//================================================================================

    $(function () {
    //  $("#getQuote").on("click", function () { // ! << UNCOMMENT & GENERATE/MATCH BUTTON #ID
            var queryURL = "http://data.tmsapi.com/v1.1/movies/airings?lineupId=USA-TX42500-X&startDateTime=2018-01-30T00%3A30Z&imageSize=Sm&imageText=true&api_key=xkhnkvkca2j54eavaxaarwhx"
            //  var apikey = ("xkhnkvkca2j54eavaxaarwhx") // ! << STORAGE ONLY -- NO NEED TO UNCOMMENT
            getQuote(); // ! <<  CALL getQuote FUNCTION
            // AJAX call ----------------------------------------

            function getQuote() {
                $.get(queryURL, function (data, status) {
                    console.log(data); //! << SUCCESS
                    //      for (var i = 0; i < data.length; i++) { // ! << DEBUG
                    for (var i = 0; i < 5; i++) {
                        var obj = data[i];
                        console.log(obj);
                        var div = $("<div>");
                        div.html(obj.program.title);
                        $("#well-section").append(div);

                        // ! Added url ===========================
                        var genre = $("<h6>").text(obj.program.genres);
                        var programDetails = $("<h6>").text(obj.program.longDescription);
                //      $("#well-section").append(genre); // ! << UNCOMMENT & GENERATE/MATCH  #ID
                //      $("#well-section").append(programDetails); // ! << UNCOMMENT & GENERATE/MATCH  #ID
                        // "http://developer.tmsapi.com/io-docs" // ! << API Developer Info.
                   }
                })
            }
        })
    });
