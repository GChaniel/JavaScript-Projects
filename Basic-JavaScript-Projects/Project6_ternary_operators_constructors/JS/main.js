//This is Ternary operation for Height ride qualification
function Ride_Function() {
  var Height, Can_ride;
  Height = document.getElementById("Height").value;
  Can_ride = Height < 52 ? "You are too short" : "You are tall enough";
  document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//This is Ternary operation for Vote qualification
function Vote_Function() {
  var Age, Can_vote;
  Age = document.getElementById("Age").value;
  Can_vote = Age < 18 ? "Unfortunately, You can't" : "Congratulations, you can";
  document.getElementById("Vote").innerHTML = Can_vote + " vote";
}

//This is a constructor function that uses "new" and "this"
function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
  document.getElementById("New_and_This").innerHTML =
    "Erik drivers a " +
    Erik.Vehicle_Color +
    "-colored " +
    Erik.Vehicle_Model +
    " manufactered in " +
    Erik.Vehicle_Year;
}

//This is a Nested function
function count_Function() {
  document.getElementById("Nested_Function").innerHTML = Count();
  function Count() {
    var Starting_Point = 19;
    function Plus_one() {
      Starting_Point += 1;
    }
    Plus_one();
    return Starting_Point;
  }
}
