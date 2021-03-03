function calculateBMI() {
  ///please remember to put () after functions 
///  var weight = prompt("What is your weight, in kg?");
///  var height = prompt("What is your height, in metres?");
  
  var weight = document.querySelector("#weight").value;
  var height = document.querySelector("#height").value;
  var bmi = weight / (height * height);
  alert("Your BMI is " + bmi);
  document.querySelector("#bmiResults").innerHTML = "Your BMI is " + bmi;

if (bmi < 17.5) {
    document.querySelector("#bmiSkinny").innerHTML = "Your BMI is too low, buff up"
  } ///it has eliminated whatever that is below 17.5
  else if (bmi < 22.5) {
    document.querySelector("#bmiRecommended").innerHTML = "Your BMI is acceptable, you are a lean mean fighting machine"
  } else {
    document.innerHTML("You are fking fat");
  }
}
///make else statements a function, add event listener --> try this at home 

// var calculateBMI = function(), since functions can be passed around as variables 
// var calculateBMI = () => {}
// IIFE - immediately invoke function expression 
