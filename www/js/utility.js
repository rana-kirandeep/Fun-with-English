/*
This class provide all utility functions such as printing objcet console, getting function by question id 
and so on
*/

var utility = {

    /*
    Return target object of touch events
    @param: event: Touch event
    */
    getTargetObj: function(event) {
        if (event.targetTouches.length == 1) {
            var touch = event.targetTouches[0];
            return touch.target;
        }
        return null;
    },
    /*
    Return touch object of touch events
    @param: event: Touch event
    */
    getTouchObj: function(event) {
        if (event.targetTouches.length == 1) {

            return event.targetTouches[0];
        }
        return null;
    },

    /*
    check if place holder on question screen has answer accociate or not
    @param:  answer object
    */
    getAttachedPh: function(obj) {
        var match = null;
        globalVar.pageAnswer.forEach(function(item, index) {

            if (obj.id == item.opId) {
                match = item;
                return;
            } //end if
        }); //end foreach

        return match;
    }, //end getAttachedPh

    /*
    print objec in json format on console
    @param: any javascript object
    */
    printObj: function(obj) {
        console.log("print:" + JSON.stringify(obj));
    },
    /*
    Return question from question array based upon question id
    @param: Question ID
    */
    getQuestionById: function(id) {
        for (i = 0; i < globalVar.currQuestions.length; i++) {
            question = globalVar.currQuestions[i];
            if (question.id == id) {
                return question;
            }

        } //end of for
        return null;
    }, //end of getQuestionByID

    /*
        Return Answer of specific answer placeholder
        @param: answer object
        @param: place holder id
        */
    getAnswerByPh: function(ans, phId) {
        phId = phId.substr(2, phId.length);

        var obj = null;
        ans.forEach(function(item) {
            if (item.placeholderId == phId) {
                obj = item;
                return obj;
            }

        }); //end for

        return obj;

    }, //end getAnserByPh

    /*
        generate next question from question array
        
        */
    getNextQuestion: function() {

        totalQuestion = globalVar.currQuestions.length;

        globalVar.currQuestionIndex++;

        // alert("next question after"+globalVar.currQuestionIndex+" total:"+totalQuestion);
        if (globalVar.currQuestionIndex == totalQuestion) {
            levelResultUi.displayResult1();
        } else {
            generateQus(globalVar.currQuestionIndex);
        }


    },
    /*
    load quesion from json file in global array
    @param: GameName: name of game
    @param: level of game
    */
    loadQuestionsByLevel: function(gameName, level) {

        var path = "js/data/" + gameName + level + ".json";
        loadJSON(parseJson, path);


    } //end question

} //utility end

/* 
Update json data into glbal question array
@param: txt: text of loaded JSON file 
*/
function parseJson(txt) {

    globalVar.currQuestions = JSON.parse(txt);
    globalVar.totalQuestion = globalVar.currQuestions.length;

}

/*
Make Ajax call to json file so that it can be read and stored in global array
@path: path of JSON file 
@param callback: callback method to be called on successfull call result
*/
function loadJSON(callback, path) {

    var xmlObj = new XMLHttpRequest();
    xmlObj.overrideMimeType("application/json");
    xmlObj.open('GET', path, false);
    xmlObj.onreadystatechange = function() {
        if (xmlObj.readyState == 4 && xmlObj.status == "200") {
            callback(xmlObj.responseText);
        }
    };
    xmlObj.send(null);
}