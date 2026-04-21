//Using a concat() method
function full_Sentence() {
  var part_1 = "I have ";
  var part_2 = "made this ";
  var part_3 = "into a complete ";
  var part_4 = "sentence. ";
  var whole_Sentence = part_1.concat(part_2, part_3, part_4);
  document.getElementById("Concatenate").innerHTML = whole_Sentence;
}

//Using a slice() method
function slice_Method() {
  var Sentence = "All work and no play makes Johnny a dull boy.";
  var Section = Sentence.slice(27, 33);
  document.getElementById("slice").innerHTML = Section;
}

//Using a toUpperCase() method
function upper_Case() {
  var text = "Hello World!";
  var result = text.toUpperCase();
  document.getElementById("upper").innerHTML = result;
}

//Using a Number to String() method
function string_Method() {
  var X = 182;
  document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//Using a toPrecision() method
function Precision_Method() {
  var X = 12938.3012987376112;
  document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
