// Assignment code here
var generateBtn = document.querySelector("#generate");
var uncap = "abcdefghijklmnopqrstuvwxyz";
var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = ' !"#$%&' + "'()*+,-./:;<=>?@[\]^_`{|}~)";
var formula = "";
var password = "";


// generatePassword function
var generatePassword = function() {
  
  var quantity = prompt('How may characters do you want (between 8 and 128)?');

  var yesUncap = confirm("Do you want uncapitalized letters?");
  if (yesUncap) {
    formula += uncap;
  }

  var yesCap = confirm("Do you want capitalized letters?");
  if (yesCap) {
    formula += cap;
  }

  var yesNum = confirm("Do you want numbers?");
  if (yesNum) {
    formula += number;
  }

  var yesSymbol = confirm("Do you want symbols?");
  if (yesSymbol) {
    formula += symbol;
  }
  // console.log(formula, formula.length);
  
    for (let i = 0; i < quantity; i++) {
      var element = formula[Math.floor(Math.random()*formula.length)]
      password += element;
    }
};

// Write password to the #password input
var writePassword = function() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword();