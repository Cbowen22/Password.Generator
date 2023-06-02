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

};

if(!lower && !upper && !numeric && !special){
  alert("please choose what you would like.")
}
else if(lower && upper && numeric && special){
  Choose = lower.concat(upper, numberic, special);
  console.log(choose);
}
else if(lower && upper && numeric){
  Choose = lower.concat(upper, numberic);
  console.log(choose);
}
else if(lower && upper && special){
  Choose = lower.concat(upper, special);
  console.log(choose);
}
else if(lower && numeric && special){
  Choose = lower.concat(numberic, special);
  console.log(choose);
}
else if(upper && numeric && special){
  Choose = lower.concat(numberic, special);
  console.log(choose);
}
else if(lower && upper){
  Choose = lower.concat(upper);
  console.log(choose);
}
else if(lower && numeric){
  Choose = lower.concat(numberic);
  console.log(choose);
}
else if(lower && special){
  Choose = lower.concat(special);
  console.log(choose);
}
else if(upper && special){
  Choose = lower.concat(special);
  console.log(choose);
}
else if(number && special){
  Choose = lower.concat(special);
  console.log(choose);
}
if(lower){
  Choose = lower;
  console.log(choose);
}
if(lower && special){
  Choose = lower.concat(special);
  console.log(choose);
}
if(upper && special){
  Choose = lower.concat(special);
  console.log(choose);
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
