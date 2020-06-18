//Variables
var enter;
var confirmNum;
var confirmSymb;
var confirmUppercase;
var confirmLowercase;
// Arrays
ABC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

symb = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "[", "{", "]", "}", ";", ":", ",", "<", ".", ">", "/", "?", "`", "~"];

num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//for turning the letters into uppercase if only this option is selected
upper = [];
// Defines their choices 
var choices;
// converts letters to uppercase 
var toUpper = function (x) {
  return x.toUpperCase();
};
//Turns the lowercaser array into Uppercase
ABC2 = ABC.map(toUpper);

var get = document.querySelector("#generate");
// even listener for when we click  generate password used arrow function here 
get.addEventListener("click", () => {
  pass = generatePassword();
  document.getElementById("password").placeholder = pass;
});


function generatePassword() {
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // If nothing is entered 
  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    //If it does not contain the right amount of chars
    enter = parseInt(prompt("You must choose between 8 and 128"));

  } else {
    confirmNum = confirm("Will this contain numbers?");
    confirmSymb = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
  };
  // If they choose no to all 
  if (!confirmSymb && !confirmNum && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");

  }
  // If all 4
  else if (confirmSymb && confirmNum && confirmUppercase && confirmLowercase) {

    choices = symb.concat(num, ABC2, ABC);
  }
  // If 3 of 4
  else if (confirmSymb && confirmNum && confirmLowercase) {
    choices = symb.concat(num, ABC);
  }
  else if (confirmSymb && confirmNum && confirmUppercase) {
    choices = symb.concat(num, ABC2);
  }
  else if (confirmSymb && confirmLowercase && confirmUppercase) {
    choices = symb.concat(ABC, ABC2);
  }
  else if (confirmNum && confirmLowercase && confirmUppercase) {
    choices = num.concat(ABC, ABC2);
  }
  // If 2 of 4
  else if (confirmNum && confirmSymb) {
    choices = num.concat(symb);

  } else if (confirmNum && confirmUppercase) {
    choices = num.concat(ABC2);

  } else if (confirmLowercase && confirmNum) {
    choices = ABC.concat(num);

  } else if (confirmSymb && confirmUppercase) {
    choices = symb.concat(ABC2);

  } else if (confirmSymb && confirmLowercase) {
    choices = symb.concat(ABC);

  } else if (confirmLowercase && confirmUppercase) {
    choices = ABC.concat(ABC2);
  }
  // If just 1
  else if (confirmNum) {
    choices = num;
 
  } else if (confirmSymb) {
    choices = symb;

  } else if (confirmLowercase) {
    choices = ABC;

  } else if (confirmUppercase) {
    choices = upper.concat(ABC2);
  };

  // password placeholder 
  var password = [];
  // Random selection for all variables
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }

  var pass = password.join("");
  UserInput(pass);
  return pass;
}

function UserInput(pass) {
  document.getElementById("password").textContent = pass;
}