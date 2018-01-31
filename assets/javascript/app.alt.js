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























})