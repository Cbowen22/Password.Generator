// Assignment Code
var generateBtn = document.querySelector("#generate");


var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numeric = ["1","2","3","4","5","6","7","8","9","0"]
var special = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+",";",":","/",">","<"]
var length = [8-128characters]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

length = prompt(please choose between 8-128 characters.);
console.log("you chose " + length);

if(!length){
  alert("required value")
} else if (length < 8 || length > 128); {
length = prompt("please choose the correct amount");
console.log("you chose " + length);
} else {
  lower = confirm("do you want lower case?");
  console.log("Case " + lower);
  upper = confirm("do you want upper case?");
  console.log("Case " + upper);
  numeric = confirm("do you want numbers?");
  console.log("Number " + numeric);
  special = confirm("do you want special characters?");
  console.log("Special " + special);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
