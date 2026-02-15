//This is a function utilizing the addition operator.
function addition_Function() {
  var addtition = 6 + 4;
  document.getElementById("Math").innerHTML = "6 + 4 = " + addtition;
}

//This is a function utilizing the Subtraction operator.
function subtraction_Function() {
  var sub = 45 - 5;
  document.getElementById("Substraction").innerHTML = "45 - 5 = " + sub;
}

//This is a function utilizing the Multiplication operator.
function multiplication() {
  var multiply = 10 * 10;
  document.getElementById("Multiplication").innerHTML = "10 x 10 = " + multiply;
}

//This is a function utilizing the division operator.
function division() {
  var divide = 100 / 2;
  document.getElementById("Division").innerHTML = " 100 / 2 = " + divide;
}

//This is a function utilizing all the addition, multiplcation, division, and subtraction operator.
function more_Math() {
  var all_Math = ((4 + 8) * 20) / 4 - 8;
  document.getElementById("math_plus").innerHTML =
    " 4 plus 8, multiply by 20, divide by 4 and then substract by 8 equals " +
    all_Math;
}

//This is a function utilizing the Modulus operator.
function modulus_Operator() {
  var simple_Math = 45 % 6;
  document.getElementById("Modulus").innerHTML =
    "When you divide 45 by 6 you have a remainder of: " + simple_Math;
}

//This is a function about the Negation operator.
function negation_Operator() {
  var x = 43;
  document.getElementById("Negation").innerHTML = -x;
}

// This is a function for increment operator
var x = 10;
x++;
document.write(x + "<br><br>");

// This is a function for decrement operator.
var x = 34;
x--;
document.write(x);

// This is a function for displaying random numbers.
window.alert(Math.random() * 100);
