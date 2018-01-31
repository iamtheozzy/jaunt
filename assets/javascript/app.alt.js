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
            $("#SEARCH BUTTON").on("click", function () {
                        var city = $("#userInput").val(); // ! << UNCOMMENT, GENERATE INPUT BOX & #ID AND MATCH TO $("#userInput")
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
