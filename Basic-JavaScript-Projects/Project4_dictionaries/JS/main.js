//This is a function that out a key-value pair for wild Cat Species
function my_Dictionary() {
  var Animal = {
    Species: "Wild Cat",
    Color: "Brown",
    Name: "Lion",
    Age: 15,
    Sound: "Roar!",
  };
  delete Animal.Name;
  document.getElementById("Dictionary").innerHTML = Animal.Name;
}
