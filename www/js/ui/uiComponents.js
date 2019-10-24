function createParagraph() {
    return document.createElement("P");
}

function createRadioButton(groupName) {

    var element = document.createElement("INPUT");
    element.setAttribute("type", "radio");
    element.setAttribute("name", groupName);


    return element;
}


function createHeader() {
    return document.createElement("H1");
}

function createSpan(text, id) {
    var element = document.createElement("SPAN");
    element.setAttribute("id", id);
    element.innerHTML = text;
    return element;
}

function createDiv(id) {
    var dv = document.createElement("DIV");
    dv.setAttribute("id", id);
    return dv;
}

function createButton(text) {
    var element = document.createElement("INPUT");
    element.type = "button"
    element.value = text;
    return element;
}

function createTextBox() {
    var element = document.createElement("INPUT");
    element.type = "text"
    return element;
}

function createImage(src, id) {
    //return document.createElement("IMG");
    var img = document.createElement("IMG");
    img.setAttribute("src", src);
    img.setAttribute("id", id);
    return img;
}

function createList() {
    return document.createElement("UL");;
}

function createListItem(item) {
    var element = document.createElement("LI")
    element.appendChild(item)
    return element
}


function labelledTextField(textLabel, textButton) {
    return {
        label: createSpan(textLabel),
        input: createTextBox(),
        button: createButton(textButton)
    };
}