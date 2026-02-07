function changeColor(color) {
  var box = document.getElementById("colorBox");
  var text = "The box is now " + color;

  box.style.backgroundColor = color;
  box.innerHTML = text;
}

function My_First_Function() {
  //Creatiung a variable witth initial text
  var sentence = "This button has been clicked";

  //Using the += operator to concatenate more text to the string
  sentence += " and the text has been updated";

  //Displaying the final striong inside the HTML element
  document.getElementById("Button_Text").innerHTML = sentence;
}
