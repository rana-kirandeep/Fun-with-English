/*
This class responsible to generate home screen UI dynamically
*/
var homeUi = {

    generateUi: function() {

        mainDiv = document.getElementById("mainDiv");
        // mainDiv.innerHTML = "";

        //Add header Div
        headertxt = document.createTextNode("Welcome to "+globalVar.DispalyName);
        headerDiv = createDiv("headerDiv1");
        headerDiv.appendChild(headertxt);
        mainDiv.appendChild(headerDiv);

        levelDiv1 = createDiv("levelDiv1");
        // levelDiv1.classList.add("nextLevelButton");
        EasyBtn = createButton("Easy");
        EasyBtn.setAttribute("id", "levelEasy");
        EasyBtn.setAttribute("value", "Easy");
        EasyBtn.classList.add("btn");
        EasyBtn.classList.add("btn-level");
        EasyBtn.addEventListener('click', homeCtrl.selectLevel);
        levelDiv1.appendChild(EasyBtn);

        MediumBtn = createButton("Medium");
        MediumBtn.setAttribute("id", "levelMedium");
        MediumBtn.setAttribute("value", "Medium");
        MediumBtn.classList.add("btn");
        MediumBtn.classList.add("btn-level");
        MediumBtn.addEventListener('click', homeCtrl.selectLevel);
        levelDiv1.appendChild(MediumBtn);


        HardBtn = createButton("Hard");
        HardBtn.setAttribute("id", "levelHard");
        HardBtn.setAttribute("value", "Hard");
        HardBtn.classList.add("btn");
        HardBtn.classList.add("btn-level");
        HardBtn.addEventListener('click', homeCtrl.selectLevel);

        HardBtntxt = document.createTextNode("Welcome");
        HardBtn.appendChild(HardBtntxt);

        levelDiv1.appendChild(HardBtn);

        mainDiv.appendChild(levelDiv1);

        bodyDiv1 = createDiv("bodyDiv1");

        playBtn = createButton("play");
        // playBtn.setAttribute("id", "levelplay");
        playBtn.classList.add("btn");
        playBtn.classList.add("btn-play");
        playBtn.addEventListener('click', homeCtrl.startPlay);
        bodyDiv1.appendChild(playBtn);


        mainDiv.appendChild(bodyDiv1);


    } //end of generate UI


} //end of home UI