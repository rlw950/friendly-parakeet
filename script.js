// Assignment code here
var generateBtn = document.querySelector("#generate");
var uncap = "abcdefghijklmnopqrstuvwxyz";
var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = ' !"#$%&' + "'()*+,-./:;<=>?@[\]^_`{|}~)";
var formula = "";
var newPassword = "";

// generatePassword function
function generatePassword() {
  var quantity = prompt("How may characters do you want (between 8 and 128)?");
  if (quantity < 8 || quantity > 128) {
    alert("Characters must be between 8 and 128!");
    return generatePassword();
  }

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
    console.log(formula);
  }

  var yesSymbol = confirm("Do you want symbols?");
  if (yesSymbol) {
    formula += symbol;
  }

  if (formula === "") {
    alert("You need to pick at least one character to continue.");
    return generatePassword();
  }
  
  for (let i = 0; i < quantity; i++) {
    var element = formula[Math.floor(Math.random()*formula.length)]
    newPassword += element;
  }
  return newPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);