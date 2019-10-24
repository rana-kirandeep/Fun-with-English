/*
This class responsible to process final levle summary page.
*/
var resultPageCtrl = {

    /* method invoked when play next level button is clicked on level summary screen
     */
    moveToNextLevel: function() {

        level = globalVar.currGameLevel;
        if (level == 3) {
            level = 0;
        }


        resultPageCtrl.resetGlobalVar(++level);
        resultPageCtrl.renderqus();

    },
    /*
    reset global variables for next level
    */
    resetGlobalVar: function(level) {


        globalVar.currGameLevel = level;
        globalVar.currQuestionIndex = -1;
        globalVar.currQuestionId = null;
        globalVar.placHolders = [];
        globalVar.pageAnswer = [];
        globalVar.currOptions = [];
        globalVar.gameResults = [];
        globalVar.currQuestions = [];
        globalVar.totalQuestion = 0;



    },

    /*
    load next level JSON file and render first question.
    */
    renderqus: function() {
        utility.loadQuestionsByLevel(globalVar.gameName, globalVar.currGameLevel);
        utility.getNextQuestion();
    },
    /*
    called when play again button on level summary screeen called.
    */
    playAgain: function() {
        resultPageCtrl.resetGlobalVar(globalVar.currGameLevel);
        resultPageCtrl.renderqus();
    } //end play again


} // End result ctrl