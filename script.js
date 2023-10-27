//2//
function Paragraph() {
    const para = document.createElement("p");
    para.textContent = "You pressed a button!";
    document.body.appendChild(para);
  }
  
  const buttons = document.querySelectorAll("button");
  
  for (const button of buttons) {
    buttonTwo.addEventListener("click", Paragraph);
  }

//3//
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("buttonThree");
    var counter = document.getElementById("starter");

    button.addEventListener("click", () =>{
        var currentValue = parseInt(counter.innerText);
        counter.innerText = (currentValue +1);
    })
})

//4//
function colorChangeRed(){
    let colorRed = document.getElementById("colorExperiment");
    colorRed.style.color = "red";
}
function colorChangeBlue(){
    let colorBlue = document.getElementById("colorExperiment");
    colorBlue.style.color = "blue";
}

function colorChangePurple(){
    let colorPurple = document.getElementById("colorExperiment");
    colorPurple.style.color = "purple";
}

red.addEventListener("click", colorChangeRed);
blue.addEventListener("click", colorChangeBlue);
purple.addEventListener("click", colorChangePurple);

//5//
document.addEventListener("DOMContentLoaded", function(){
    var button = document.getElementById("showText");
    var userInput = document.getElementById("input");
    var output = document.getElementById("output");

    button.addEventListener("click", () => {
        output.innerText = userInput.value;
    });
})

//6//
document.addEventListener("DOMContentLoaded", function () {
    var paragraph = document.getElementById("fontExperiment");
    var fontSelector = document.getElementById("fontDropDown");

    fontSelector.addEventListener("change", function(){
        var selectedFont = fontSelector.options[fontSelector.selectedIndex].value;
        paragraph.style.fontFamily = selectedFont;
    })
})

//Shout out to Antwone for helping me with 3,5 & 6//