$(document).ready(function()){
  // Stores user inputs to calculate later
  var inputs = [""];
 // String to store current input string
  var totalString
  // Used for validation purposes
  // Operators array for validation without the dot
  var operators1 = ["+", "-", "/", "*"];
  // Operators array with the dot
  var operators2 = ["."];
  // Numbers for validation purposes
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function getValue(input){

  }

  // Updates to most current value
  function update(){
    totalString = inputs.join("");
    $("#steps").html(totalString);

  }

  function getTotal(){
    totalString = inputs.join("");
    $("#steps").html(eval(totalString));

  }


});
