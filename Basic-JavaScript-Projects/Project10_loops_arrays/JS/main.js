// A while loop that counts from 2 to 20 and displays the even numbers in a string.
function call_Loop() {
  var i = 2;
  var result = "";

  while (i <= 20) {
    result += i + " is an even number<br>";
    i += 2;
  }
  document.getElementById("Loop").innerHTML = result;
}

// A for loop that iterates through an array of instruments and displays them in a string.
var Instruments = ["Guitar", "Piano", "Drums", "Violin", "Flute"];
var Content = "";
var Y;

function for_Loop() {
  for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
  }
  document.getElementById("List_of_Instruments").innerHTML = Content;
}

// A function that uses cat pictures to display an array.
function cat_pics() {
  var Cat_Pictures = [];
  Cat_Pictures[0] = "sleeping";
  Cat_Pictures[1] = "playing";
  Cat_Pictures[2] = "eating";
  Cat_Pictures[3] = "purring";
  document.getElementById("Array").innerHTML =
    "In this pictures, the cat is " + Cat_Pictures[1] + ".";
}

// A constant object that represents a car, with properties for make, model, and year.
function constant_function() {
  const Musical_Instrument = {
    type: "guitar",
    brand: "Fender",
    color: "Green",
  };
  Musical_Instrument.color = "black";
  Musical_Instrument.price = "$1500";
  document.getElementById("Constant").innerHTML =
    "The cost of the " +
    Musical_Instrument.type +
    " is " +
    Musical_Instrument.price +
    " It's in a " +
    Musical_Instrument.color +
    " color.";
}

// A function that demonstrates the use of the let keyword to create a block-scoped variable.
var X = 20;
let result = X;

{
  let X = 50;
  result += "<br>" + X;
}
result += "<br>" + X;
document.getElementById("output").innerHTML = result;

// A function that demonstrates the use of the return statement to return a value from a function.
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2024,
  color: "Green",
  description: function () {
    return (
      "The car is a " +
      this.year +
      " " +
      this.make +
      " " +
      this.color +
      " " +
      this.model +
      "."
    );
  },
};
document.getElementById("Car_object").innerHTML = car.description();
