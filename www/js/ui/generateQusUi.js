/*
This function render question screen based upon currunt question index
@param: currQuestionIndex, currunt question index to be render
*/
function generateQus(currQuestionIndex) {


    //clear screen;
    mainDiv = document.getElementById("mainDiv");
    mainDiv.innerHTML = "";

//questionIndex

    headerDiv = createDiv("headerDiv");
    headerDiv.classList.add("qusHeader");

    questionIndexDiv = createDiv("questionIndexDiv");
    questionIndexDiv.classList.add("questionIndex");


    questionIndexText = document.createTextNode("Question: "+(currQuestionIndex+1)+"/"+globalVar.totalQuestion);
    questionIndexDiv.appendChild(questionIndexText);

    levelIndexDiv = createDiv("levelIndexDiv");
    levelIndexDiv.classList.add("levelIndex");    
    
    levelIndexText = document.createTextNode("level: "+globalVar.currGameLevel);
    levelIndexDiv.appendChild(levelIndexText);


    headerDiv.appendChild(levelIndexDiv);
    headerDiv.appendChild(questionIndexDiv);


    mainDiv.appendChild(headerDiv);
    globalVar.currQuestionId = globalVar.currQuestions[currQuestionIndex].id;

    globalVar.pageAnswer=[];

    questionStr = globalVar.currQuestions[currQuestionIndex].question;

    console.log("globalVar.currQuestionId" + globalVar.currQuestionId);
    
    temp=questionStr;
    questionArray = questionStr.split(/\$[0-9]/);


    questionArray.forEach(function(item, index) {
     temp = temp.replace(item,"");
    });

    var qArray = temp.split(/\$/);


    questionSection = createDiv("questionSection");
    for (i = 0; i < questionArray.length - 1; i++) {

        placeHolder = createDiv("ph" + qArray[i+1]);
        placeHolder.classList.add("ansplcHolder");

        txtSpan = createSpan(questionArray[i], "taxt-part" + i);
        questionSection.appendChild(txtSpan);

        plSpan = createSpan("", "plholdr-part" + i);
        plSpan.classList.add("ansplcHolderSpan");

        plSpan.appendChild(placeHolder);
        questionSection.appendChild(plSpan);

        globalVar.placHolders[i] = placeHolder;
    } //end for loop

    mainDiv.appendChild(questionSection);



    optionSection = createDiv("optionSection");
    // var optionSection = null;
    options = globalVar.currQuestions[currQuestionIndex].options;



    console.log(options);
    for (var i = 0; i < options.length; i++) {

        optionSpan = createSpan(options[i].label, "op" + options[i].id);
        optionSpan.addEventListener('touchstart', touchStartHandler, false);
        optionSpan.addEventListener('touchmove', touchMoveHandler, false);
        optionSpan.addEventListener('touchend', touchEndHandler, false);
        optionSpan.classList.add("option");
       
        globalVar.currOptions[i] = optionSpan;
        optionSection.appendChild(optionSpan);

    };

    mainDiv.appendChild(optionSection);

    buttonDiv = createDiv("buttonDiv");
    chkAnsButton = createButton("Check Answer");
    chkAnsButton.classList.add("btn");
    chkAnsButton.classList.add("btn-play");
    chkAnsButton.onclick = answerCtrl.validateAnswer;
    
    chkAnsButton.addEventListener("transitionend",function(event){
       
        if(event.propertyName!=='transform')return;
         this.classList.remove("clicked");
    });

    submitButton = createButton("Next Question");
    submitButton.classList.add("btn");
    submitButton.classList.add("btn-play");
    submitButton.onclick = processor.processAnswer;
    submitButton.addEventListener("transitionend",function(event){
       
        if(event.propertyName!=='transform')return;
         this.classList.remove("clicked");
    });

    buttonDiv.appendChild(chkAnsButton);
    buttonDiv.appendChild(submitButton);
    mainDiv.appendChild(buttonDiv);

} //End of generateQus

