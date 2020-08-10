//  variable arrays
var response = [];
var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symb = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "[", "{", "]", "}", ";", ":", ",", "<", ".", ">", "/", "?", "`", "~"];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var generate = document.querySelector("#generate");
var clear = document.querySelector("#clear");
// The on click event recalls the function and ends with returning the combined password
// in the password text area
generate.addEventListener("click", () => {
    document.getElementById("password").placeholder = createPass();     
});
// deletes the input for the password to create a new one
clear.addEventListener("click", () =>{
document.getElementById("password").placeholder = "";
});
function createPass(){
    // ParseInt is required to take a number in as a string
    selected = parseInt(prompt("Pick between 8 and 128 Characters"))
//    if you dont recall the function in line 17 it will error after picking a number outside 8 and 128 more than once
   if(selected < 8 || selected > 128) {
   selected = parseInt(prompt("Must be between 8 and 128 Characters")) 
   createPass();
   }else  {
        upperCase = confirm("Will there be Uppercase Characters?");
        lowerCase = confirm("Will there be Lowercase Characters?");
        number = confirm("Will this contain numbers?");
        symbol = confirm("Will there be Special Characters/Symbols?");
    };
    // calling the function again here restarts the prompt until proper selections are made
if ( upperCase === false && lowerCase === false && number === false && symbol === false)
    {
       alert("Must select at least 1 option");
       createPass();
    };
// These decide which prompts were confirmed true 
// if more than one, combines the strings of the selected arrays
     if ( upperCase === true) {
        combinedArray = ABC;
    } 
     if ( lowerCase === true) {
        combinedArray = abc;
    }
     if ( number === true) {
        combinedArray = num;
    } 
      if ( symbol === true) {
        combinedArray = symb;
     }
      if (upperCase === true && lowerCase === true) {
         combinedArray = abc.concat(ABC);
     }
      if (upperCase === true && symbol === true){
         combinedArray = ABC.concat(symb);
     }
      if (upperCase === true && number === true ) {
         combinedArray = ABC.concat(num);
     }
      if ( lowerCase === true && symbol === true) {
         combinedArray = abc.concat(symb);
     }
      if(lowerCase === true && number === true) {
         combinedArray = abc.concat(num);
     }
      if (number === true && symbol === true) {
         combinedArray =num.concat(symb);
     }
      if (upperCase === true && lowerCase === true && number === true){
         combinedArray = ABC.concat(abc, num);
     }
      if(upperCase === true && lowerCase === true && symbol === true) {
         combinedArray = ABC.concat(abc, symb);
     }
      if(upperCase === true && number === true && symbol === true) {
         combinedArray = ABC.concat(num, symb);
     }
      if(lowerCase === true && number === true && symbol === true) {
         combinedArray = abc.concat(num, symb);
     }
      if (upperCase === true && lowerCase === true && number === true && symbol === true){
         combinedArray = ABC.concat(abc, num, symb);
     };
//  Finally this loops through the selected choices and randomizes what it picks 
// based off the number (selected)
    for(var i = 0; i < selected; i++) {
        selection = combinedArray[Math.floor(Math.random() * combinedArray.length)];
        response.push(selection);
       }
    // This is outside the for loop  it combines the the strings of the different arrays
    // and returns the password
     combined = response.join("")
        return combined;
        }