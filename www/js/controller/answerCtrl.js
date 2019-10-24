/*
All answer releted processing done in this controller
*/
var answerCtrl = {

    /* called when check question button is clicked, It is marked wrng answer
     as red background and green for correct answer.
     */
    validateAnswer: function(e) {


        e.target.classList.add("clicked");


        currQuestion = utility.getQuestionById(globalVar.currQuestionId);
        ans = currQuestion.answers;


        globalVar.pageAnswer.forEach(function(item) {
            correctAns = utility.getAnswerByPh(ans, item.phId);

            opId = item.opId;
            opId = opId.substr(2, opId.length);
            var o = document.getElementById(item.opId);
            if (correctAns.optionId == opId) {

                o.classList.add("correctAns");
                o.classList.add("disabled");
            } else {
                o.classList.add("wrongAns");
                o.classList.add("disabled");
            }

        }); //end for loop

        var options = document.getElementsByClassName("option");

        for (var i = 0; i < options.length; i++) {
            options[i].removeEventListener('touchstart', touchStartHandler, false);
            options[i].removeEventListener('touchmove', touchMoveHandler, false);
            options[i].removeEventListener('touchend', touchEndHandler, false);
        }

        var qusSection = document.getElementById("questionSection");
        qusSection.classList.add("disabled");

    } //End validate Answer
} //end answerCtrl