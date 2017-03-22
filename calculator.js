$(document).ready(function(){
   //Stores the inputs from user to calculate later
  var inputs=[""];
  //String to store current input string
  var totalString;
 //Operators array for validation without decimal
  var operators1 = ["+","-","/","*"];
 //operators array for validation with decimal
  var operators2 = ["."];
  //Numbers array for validation
  var nums=[0,1,2,3,4,5,6,7,8,9];

  //Adds value to inputs array and checks validation
  function getValue(input){
     if(operators2.includes(inputs[inputs.length-1])===true && input==="."){
     console.log("Duplicate '.'");
  }
   // Make sure expression does not start with an operator
    else if(inputs.length===1 && operators1.includes(input)===false){
      inputs.push(input);
    }
    // Check there aren't multiple operators in sequence
  else if(operators1.includes(inputs[inputs.length-1])===false){
    inputs.push(input);
  } // Handle numerical entries; convert them using Number
    else if(nums.includes(Number(input))){
      inputs.push(input);
    }
    update();
  }

// Updates inputs array accordingly and displays value in entry box
  function update(){
    totalString= inputs.join("");
    $("#steps").html(totalString);
    console.log(inputs);
  }

// Totals everything up and displays it in entry box
  function getTotal(){
    totalString = inputs.join("");
    $("#steps").html(eval(totalString));
  }

// Clears inputs array if user clicks deleteAll
  $("a").on("click",function(){
    if(this.id==="deleteAll"){
      inputs = [""];
      update();
    } // Clears last entry if user clicks backOne
    else if(this.id==="backOne"){
      inputs.pop();
      update();
    } // Otherwise, total everything up
    else if(this.id==="total"){
      getTotal();
    }
    else{
      if(inputs[inputs.length-1].indexOf("+","-","/","*",".")===-1){
        getValue(this.id);
      }
      else {
        getValue(this.id);
      }
    }
  });

});
