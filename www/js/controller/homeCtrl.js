/*
This class responsible for homescreen button click procesing
*/
var homeCtrl = {
    /*
    called once play button is clicked, this load question fron JSON file and trigger to generate irst question.
    */
    startPlay: function() {

        //console.log(e);
        this.classList.add("playClicked");
        //e.target.classList.add("playClicked");

        if (globalVar.currGameLevel == 0) {
            globalVar.currGameLevel = 1;
        }
        utility.loadQuestionsByLevel(globalVar.gameName, globalVar.currGameLevel);
        utility.getNextQuestion();


    }, //End startPlay

    /*
    This methods responsible to change level from home screen.
    */
    selectLevel: function() {

        var previousButton = document.getElementsByClassName("selectedLevel");
        if (previousButton != null) {
            for (var i = 0; i < previousButton.length; i++) {
                previousButton[i].classList.remove("selectedLevel");
            }
        }

        if (this.value == "Easy") {
            globalVar.currGameLevel = 1;
        } else if (this.value == "Hard") {
            globalVar.currGameLevel = 3;
        } else {
            globalVar.currGameLevel = 2;
        }

        this.classList.add("selectedLevel");
    } //end of selectLevel

} // End Home controller