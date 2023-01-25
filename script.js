 // Assignment Code
 var generateBtn = document.querySelector("#generate");

 // Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password;
 
 }
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
 
 
 
 
 // Var outside functions for scope
 var lowerCase = "abcdefghijklmnopqrstuvwxyz";
 var upperCase = lowerCase.toUpperCase();
 var randomNumber = "0123456789";
 var symbol = "!@#$%^&*()";
 var charsArr = [lowerCase, upperCase, randomNumber, symbol];
 
 function getRandomLower() {
   return lowerCase[Math.floor(Math.random() * lowerCase.length)];
 }
 
 function getRandomUpper() {
   return upperCase[Math.floor(Math.random() * upperCase.length)];
 }
 
 function getRandomNumber() {
   return randomNumber[Math.floor(Math.random() * randomNumber.length)];
 }
 
 function getRandomSymbol() {
   return symbol[Math.floor(Math.random() * symbol.length)];
 }
 
 // All additional code should be attainable in this function. PLay with helper functions.
 // Try prompt() and confirm()
 
 
 function generatePassword() {
   var lengthChoice = window.prompt("Choose password length:");
   var lengthChoice = parseInt(lengthChoice);
   if (!lengthChoice) {
     return;
   } else if (lengthChoice.length < 8 || lengthChoice.length > 128) {
     window.confirm("Password must be between 8 and 128 characters in length.");
   } else if (lengthChoice,length >= 8 || lengthChoice.length <= 128) {
     window.confirm("Use lower case letters?");
   }
 
 }
  