//This is a global variable
var x = 20;
function Add_numbers_1() {
  document.write(20 + x + "<br>");
}
function Add_numbers_2() {
  document.write(x + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

//This is a Local variable
function Add_number_1() {
  var X = 10;
  document.write(20 + X + "<br>");
}
function Add_number_2() {
  document.write(X + 100);
}
Add_number_1();
Add_number_2();

//This is a Local variable to debug Add_number_2
function Add_number_1() {
  var X = 10;
  console.log(20 + X + "<br>");
}
function Add_number_2() {
  console.log(X + 100);
}
Add_number_1();
Add_number_2();

//If statement
function get_Date() {
  if (new Date().getHours() > 20) {
    document.getElementById("Greeting").innerHTML = "It's time to sleep";
  }
}

//if else statement for study time.
function Study_Function() {
  Hours = document.getElementById("Hours").value;
  if (Hours >= 4) {
    Hours = "Great job staying disciplined!";
  } else {
    Hours = "Try to study a bit more today!";
  }
  document.getElementById("Studies").innerHTML = Hours;
}

//Else if statement for time
function Time_function() {
  var Time = new Date().getHours();
  var Reply;
  if (Time < 12 == Time > 0) {
    Reply = "It is morning time!";
  } else if (Time >= 12 == Time < 18) {
    Reply = "It is afternoon.";
  } else {
    Reply = "It is evening time";
  }
  document.getElementById("Time_of_day").innerHTML = Reply;
}
