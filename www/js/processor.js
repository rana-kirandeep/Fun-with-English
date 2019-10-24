/*
this class responsible to do main processing of question screen
*/
var processor = {

/* it check answer when next question button is clicked
it cosilidate answer in global array so that answer can be used later on level summay screen 
*/
    checkAnswer: function() {

        currQuestion = utility.getQuestionById(globalVar.currQuestionId);
        ans = currQuestion.answers;
        globalVar.pageAnswer.forEach(function(item) {
            correctAns = utility.getAnswerByPh(ans, item.phId);

            opId = item.opId;
            opId = opId.substr(2, opId.length);

            if (correctAns.optionId == opId) {
                item.correct = true;
            } else {
                item.correct = false;
            }

        }); //end for loop

        globalVar.pageAnswer.forEach(function(item) {
            utility.printObj(item);

        });

        var result = new gameResult(globalVar.currQuestionId, globalVar.pageAnswer);
        globalVar.gameResults.push(result);
        //utility.printObj(globalVar.gameResults);        

    }, //End checkanswer

/*
called when next question button is called
it checks answer and call next question 
*/
    processAnswer: function(e) {
        e.target.classList.add("clicked");
        processor.checkAnswer.call();
        utility.getNextQuestion();


    }


} //end prosessor


var currPageAnswer = null;
var results = new Array();

/*
it is touchStartHandler, called once touch start event is triggered  
*/
var touchStartHandler = function(event) {


    obj = utility.getTargetObj(event);
    obj.classList.add("touchStart");
    
    event.preventDefault();
}; //end touchStart

/*
it is touchMoveHandler, called once touch move event is triggered  
*/
var touchMoveHandler = function(event) {

    obj = utility.getTargetObj(event);

    var touch = utility.getTouchObj(event);
    obj.classList.remove("dropped");
    obj.classList.add("floating");
    obj.classList.remove("touchStart");
    obj.style.left = touch.pageX - 30 + 'px';
    obj.style.top = touch.pageY - 30 + 'px';
    placeHolder = getInRangePlaceHolder(obj);

    if (placeHolder != null) {
        placeHolder.classList.add("caneat");
       
        obj.classList.add("candrop");
    } else {
        obj.classList.remove("candrop");

    } //end if 
}; //end touchMove

/*
it is touchEndHandler, called once touch end event is triggered  
*/
var touchEndHandler = function(event) {
    obj = event.currentTarget;
    obj.classList.remove("candrop");
    globalVar.placHolders.forEach(function(item) {
        
        item.classList.remove("caneat");

    }); //End for loop

    ansPair = utility.getAttachedPh(obj);
    if (ansPair != null) {
        globalVar.pageAnswer.pop(ansPair);
    } //end if



    placeHolder = getInRangePlaceHolder(obj);

    if (placeHolder != null) {
        obj.style.left = placeHolder.getBoundingClientRect().left + 'px';
        obj.style.top = placeHolder.getBoundingClientRect().top + 'px';
        obj.classList.add("dropped");
        placeHolder.classList.remove("caneat");
        placeHolder.classList.add("occupied");
        //answerdQuestion.push(placeHolder);
        ans = { phId: placeHolder.id, opId: obj.id };
        globalVar.pageAnswer.push(ans);
    } else {
        obj.classList.add("droppedOutside");
        obj.classList.remove("floating");
    }


    event.preventDefault();
};

/*
check if number is in range or not
*/

function between(x, min, max) {
   
    return x >= min && x <= max;
};

/*

Match moving option's corrdinated with place holder corrdinates and returning matching placeholder div 
*/
function getInRangePlaceHolder(draggable) {

    obj = draggable;
    objLeft = obj.style.left.substring(0, obj.style.left.indexOf("px"));
    objTop = obj.style.top.substring(0, obj.style.top.indexOf("px"));

    for (i = 0; i < globalVar.placHolders.length; i++) {
        optn = globalVar.placHolders[i].getBoundingClientRect();
        if (between(objLeft, optn.left - 20, optn.left + 80) && between(objTop, optn.top - 10, optn.top + 20)) {
          
            return globalVar.placHolders[i];
        }

    }
    return null;
} //end getInRangePlaceHolder