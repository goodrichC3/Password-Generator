 // Assignment Code
 var generateBtn = document.querySelector("#generate");

 // Write password to the #password input
 function writePassword() {
   prompts();
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password;
 
 }
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
 
 
 
 
 // Var outside functions for scope
 var lengthChoice = 0;
 var selectArr = [];
 var lowerCase = "abcdefghijklmnopqrstuvwxyz";
 var upperCase = lowerCase.toUpperCase();
 var randomNumber = "0123456789";
 var symbol = "!@#$%^&*()";
 var lowerCaseArr = lowerCase.split("");
 var upperCaseArr = upperCase.split("");
 var randomNumberArr = randomNumber.split("");
 var symbolArr = symbol.split("");
 
 
 // Need if statements to work through prompts
 // Try prompt(), confirm(), and alert()
 
 function prompts() {
   lengthChoice = parseInt(prompt("Choose password length.")); //prompt returns string. Use parseInt to convert to ineger
   if(lengthChoice < 8 || lengthChoice > 128) {
       window.alert("Please choose a value between 8 and 128");
       return false;
   } if(window.confirm("Include lower case letters?")) {
       selectArr = selectArr.concat(lowerCaseArr);
   } if(window.confirm("Include upper case letters?")) {
       selectArr = selectArr.concat(upperCaseArr);
   } if(window.confirm("Include numbers?")) {
       selectArr = selectArr.concat(randomNumberArr);
   } if(window.confirm("Include special characters?")) {
       selectArr = selectArr.concat(symbolArr);
   }
   return true;
 }
 
 // For loop iterates through parameters added to selectArr in prompts function by count of lengthChoice.
 // Use math operators to randomize index in array, otherwise parameters will likely appear sequentially.
 
 function generatePassword() {
   var passGen = "";
   for(var i = 0; i < lengthChoice; i++) {
     var arrayIndex = Math.floor(Math.random() * selectArr.length);
     passGen = passGen + selectArr[arrayIndex];
   }
   return passGen;
 }
 