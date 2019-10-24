/*
This class is starting point of game and reponsible to initilize first home screen
*/
var app = {

    // Application Constructor
    initialize: function() {
        //To print error on logs
        window.onerror = function(message, url, lineNumber) {
        console.log("Error: "+message+" in "+url+" at line "+lineNumber);
        };
        
     //Create home scren    
    homeUi.generateUi();

    }, //End initialize

};


//App initialization.
app.initialize();