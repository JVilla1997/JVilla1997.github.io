function increaseTextSize() {
    var myText = "Text has been made bigger."
    document.getElementById("textArea").style.fontSize = "4em";
    alert(myText);
}
function changeStyle() {
    var myTextTwo = "Font style changed."
    document.getElementById("textArea").style.fontStyle = "italic";
    document.getElementById("textArea").style.fontWeight = "bold";
    document.getElementById("textArea").style.color = "blue";
    alert(myTextTwo)
}
function normalStyle() {    
    var myTextThree = "Font style returned to normal."
    document.getElementById("textArea").style.fontStyle = "normal";
    document.getElementById("textArea").style.fontWeight = "normal";
    document.getElementById("textArea").style.color = "initial";
    alert(myTextThree)
}
function moo() {
    document.getElementById("textArea").style.textTransform = "capitalize";
    var i = 0;
    var suffix = "-Moo"
    var textAreaTwo = document.getElementById('textArea').value; 
    var textArray = textAreaTwo.split("\n");

    for (i = 0; i < textArray.length; i++) {
        textArray[i] = textArray[i] + suffix; 
    }
    document.getElementById("textArea").value = textArray.join("\n");
}

let mooButton = document.getElementById("mooButton");
mooButton.addEventListener("click", moo);

let biggerButton = document.getElementById("biggerButton");
biggerButton.addEventListener("click", increaseTextSize);

let styleButton = document.getElementById("styleButton");
styleButton.addEventListener("click", changeStyle);

let normieButton = document.getElementById("normieButton");
normieButton.addEventListener("click", normalStyle);

