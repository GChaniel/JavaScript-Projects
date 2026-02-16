// This is a "type of" operator
document.write(typeof "Word" + "<br>");
document.write(typeof 6 + "<br>");
document.write(typeof true + "<br>");
document.write(typeof 123n + "<br>");
document.write(typeof Symbol(), "<br><br>");

// This is a type Coercion
document.write("40" + 4, "<br><br>");

//Function to confirm if the Not a Number is true or false
function my_Function() {
  //document.getElementById("Test").innerHTML = 0 / 0;
  document.getElementById("Test").innerHTML = isNaN("007");
}

//Infinity function
function infinity() {
  document.getElementById("Number").innerHTML = 2e310;
}

//Negative infinity function
function negative_Infinity() {
  document.getElementById("Negative_Number").innerHTML = -3e310;
}

//Boolean greater than function, to confirm if the logic is true or false.
function greater_Than() {
  var greater = 30 > 23;
  document.getElementById("True").innerHTML =
    "Is 30 greater than 23: " + greater;
}

//Boolean greater than function, to confirm if the logic is true or false.
function less_Than() {
  var less = 50 < 20;
  document.getElementById("False").innerHTML = "Is 50 less than 20: " + less;
}

// This is to display the result in the browser console.
console.log(4 < 2);

// This function is about double equal signs
function double_Equal() {
  var Equalto = 30 == 30;
  document.getElementById("equal_To").innerHTML =
    "Is 30 equal to 30: " + Equalto;
}

// This function is about double equal signs
function not_Equal_To() {
  var notequal = 30 == 10;
  document.getElementById("not_Equal").innerHTML =
    "Is 30 equal to 10: " + notequal;
}

// This is a function for Triple Equal Signs
//The data type and value
x = 10;
y = 10;
document.write(x === y, "<br>");

//Different the data type and value.
x = 30;
y = "20";
document.write(x === y, "<br>");

//Different data type but same value.
a = 20;
b = "20";
document.write(a === b, "<br>");

//The same data type but different value.
a = 50;
c = 40;
document.write(a === c, "<br><br>");

//This is the AND Operator.
document.write(7 > 4 && 9 > 3, "<br>");
//False for AND Operator
document.write(4 > 10 && 9 > 5, "<br><br>");

//This is the OR Operator.
document.write(12 > 10 || 7 > 9, "<br>");
//False for OR Operator.
document.write(12 > 13 || 7 > 9);

//This is a NOT function.
function not_Function() {
  document.getElementById("Not").innerHTML = !(20 > 5);
}

//Displays true for NOT function
function true_Not_Function() {
  document.getElementById("TrueNot").innerHTML = !(20 > 30);
}
