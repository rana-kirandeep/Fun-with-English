/*
This class responsible to generate level summary screen at the end of the level
*/
var levelResultUi = {

/*
Display final summary of level
*/
    displayResult1: function() {

        var totalBlanks = 0;
        var numberOfCorrects = 0;
        var numberOfIncorrects = 0;
        globalVar.gameResults.forEach(function(result, index) {

            //calculate corret and incorrect question
            currQuestion = utility.getQuestionById(result.questionId);
            ans = currQuestion.answers;
            totalBlanks = totalBlanks + currQuestion.answers.length;
            result.pageAnswer.forEach(function(item, index) {
                utility.printObj(item);
                if (item.correct == true) {
                    numberOfCorrects++;
                } else {
                    numberOfIncorrects++;
                }

            }); //end inner loop



        }); //end foreach


        //Number of question UnAttempted:
        unattempted = totalBlanks - (numberOfCorrects + numberOfIncorrects);

        //clear screen;
        mainDiv = document.getElementById("mainDiv");
        mainDiv.innerHTML = "";

        headerDiv = createDiv("RheaderDiv");
        headerDivText = document.createTextNode("You are playing " + globalVar.DispalyName);
        headerDiv.appendChild(headerDivText);

        mainDiv.appendChild(headerDiv);

        resultHeaderDiv = createDiv("resultHeaderDiv");
        congMsg = createDiv("congMsg");

        congMsgText = document.createTextNode("Level " + globalVar.currGameLevel+" finished!");
        congMsg.appendChild(congMsgText);

        resultButton = createDiv("resultButton");
        playAgainButton = createDiv("playAgainButton");
        playAgainButton.classList.add("playAgainButton");


        playAgainBtn = createButton("play Again");
        playAgainBtn.setAttribute("id", "playAgain");
        playAgainBtn.classList.add("btn");
        playAgainBtn.classList.add("btn-result");
        playAgainBtn.addEventListener('click', resultPageCtrl.playAgain);

        playAgainButton.appendChild(playAgainBtn);

        resultButton.appendChild(playAgainButton);

        nextLevelButton = createDiv("nextLevelButton");
        nextLevelButton.classList.add("nextLevelButton");
        nextLevelBtn = createButton("Next Level");
        nextLevelBtn.setAttribute("id", "nextLevel");
        nextLevelBtn.classList.add("btn");
        nextLevelBtn.classList.add("btn-result");
        nextLevelBtn.addEventListener('click', resultPageCtrl.moveToNextLevel);


        nextLevelButton.appendChild(nextLevelBtn);
        resultButton.appendChild(nextLevelButton);

        resultHeaderDiv.appendChild(congMsg);
        resultHeaderDiv.appendChild(resultButton);

        mainDiv.appendChild(resultHeaderDiv);


        resultBody = createDiv("resultBody");
        resultBodyHeader = createDiv("resultBodyHeader");


        resultBodyHeaderText = document.createTextNode("Level Summary");
        resultBodyHeader.appendChild(resultBodyHeaderText);

        resultBodyHeader.classList.add("resultBodyHeader");

        mainDiv.appendChild(resultBodyHeader);

        resultBodyline1 = createDiv("resultBodyline1");
        resultBodyline1.classList.add("resultBodyline");
        resultlabel1 = createDiv("resultlabel1");
        resultlabel1.classList.add("resultlabel");
        resultlabel1Text = document.createTextNode("Number of question Attempted:");
        resultlabel1.appendChild(resultlabel1Text);
        resultBodyline1.appendChild(resultlabel1);
        resultValue1 = createDiv("resultValue1");
        resultValue1.classList.add("resultValue");
        resultValue1Text = document.createTextNode(totalBlanks);
        resultValue1.appendChild(resultValue1Text);
        resultBodyline1.appendChild(resultValue1);
        resultBody.appendChild(resultBodyline1);


        resultBodyline2 = createDiv("resultBodyline2");
        resultBodyline2.classList.add("resultBodyline");
        resultlabel2 = createDiv("resultlabel2");
        resultlabel2.classList.add("resultlabel");
        resultlabel2Text = document.createTextNode("Number of blanks corrected:");
        resultlabel2.appendChild(resultlabel2Text);
        resultBodyline2.appendChild(resultlabel2);
        resultValue2 = createDiv("resultValue2");
        resultValue2.classList.add("resultValue");
        resultValue2Text = document.createTextNode(numberOfCorrects);
        resultValue2.appendChild(resultValue2Text);
        resultBodyline2.appendChild(resultValue2);
        resultBody.appendChild(resultBodyline2);



        resultBodyline3 = createDiv("resultBodyline3");
        resultBodyline3.classList.add("resultBodyline");
        resultlabel3 = createDiv("resultlabel3");
        resultlabel3.classList.add("resultlabel");
        resultlabel3Text = document.createTextNode("Number of blanks wrong:");
        resultlabel3.appendChild(resultlabel3Text);
        resultBodyline3.appendChild(resultlabel3);
        resultValue3 = createDiv("resultValue3");
        resultValue3.classList.add("resultValue");
        resultValue3Text = document.createTextNode(numberOfIncorrects);
        resultValue3.appendChild(resultValue3Text);
        resultBodyline3.appendChild(resultValue3);
        resultBody.appendChild(resultBodyline3);


        resultBodyline4 = createDiv("resultBodyline4");
        resultBodyline4.classList.add("resultBodyline");
        resultlabel4 = createDiv("resultlabel4");
        resultlabel4.classList.add("resultlabel");
        resultlabel4Text = document.createTextNode("Number of blanks unattampted:");
        resultlabel4.appendChild(resultlabel4Text);
        resultBodyline4.appendChild(resultlabel4);
        resultValue4 = createDiv("resultValue4");
        resultValue4.classList.add("resultValue");
        resultValue4Text = document.createTextNode(unattempted);
        resultValue4.appendChild(resultValue4Text);
        resultBodyline4.appendChild(resultValue4);
        resultBody.appendChild(resultBodyline4);

        resultBodyline5 = createDiv("resultBodyline5");
        resultBodyline5.classList.add("resultBodyline");
        resultlabel5 = createDiv("resultlabel5");
        resultlabel5.classList.add("resultlabel");
        resultlabel5Text = document.createTextNode("Points gain in level:");
        resultlabel5.appendChild(resultlabel5Text);
        resultBodyline5.appendChild(resultlabel5);
        resultValue5 = createDiv("resultValue5");
        resultValue5.classList.add("resultValue");
        resultValue5Text = document.createTextNode(numberOfCorrects);
        resultValue5.appendChild(resultValue5Text);
        resultBodyline5.appendChild(resultValue5);
        resultBody.appendChild(resultBodyline5);

        mainDiv.appendChild(resultBody);

        resultfooter = createDiv("resultfooter");


        playAgainButton1 = createDiv("playAgainButton1");
        playAgainButton1.classList.add("playAgainButton");
        playAgainBtn1 = createButton("play Again");
        playAgainBtn1.setAttribute("id", "playAgain");
        playAgainBtn1.classList.add("btn");
        playAgainBtn1.classList.add("btn-result");
        playAgainBtn1.addEventListener('click', resultPageCtrl.playAgain);
        playAgainButton1.appendChild(playAgainBtn1);
        resultfooter.appendChild(playAgainButton1);



        nextLevelButton1 = createDiv("nextLevelButton1");
        nextLevelButton1.classList.add("nextLevelButton");
        nextLevelBtn1 = createButton("Next Level");
        nextLevelBtn1.setAttribute("id", "nextLevel");
        nextLevelBtn1.classList.add("btn");
        nextLevelBtn1.classList.add("btn-result");
        nextLevelBtn1.addEventListener('click', resultPageCtrl.moveToNextLevel);


        nextLevelButton1.appendChild(nextLevelBtn1);
        resultfooter.appendChild(nextLevelButton1);

        mainDiv.appendChild(resultfooter);



    }//End method

} //end class/object