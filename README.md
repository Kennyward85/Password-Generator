# Password-Generator Acceptance Criteria


1. Inteded to Create a Password generate consisting of 8-128 chars

2. will consist of 4 options uppercase lowercase symbols and numbers

3. Will have an eventlistiner where upon clicking the BTN
a prompt for password length will apear starting the code to proceed

4. Then will send a series of prompts selecting password attributes Listed below
((Will this contain numbers?
  Will this contain special characters?
  Will this contain Uppercase letters?
  Will this contain Lowercase letters?))

5. Once selection is made it will then autopopulate the Text area with the password based off selection 

6.for some of the things I wasnt sure about I relied on w3schools
  (https://www.w3schools.com/jsref/jsref_parseint.asp#:~:text=Definition%20and%20Usage,number%20to%20a%20decimal%20number.)

Definition: 

The parseInt() function parses a string and returns an integer.

The radix parameter is used to specify which numeral system to be used, for example, a radix of 16 (hexadecimal) indicates that the number in the string should be parsed from a hexadecimal number to a decimal number.

If the radix parameter is omitted, JavaScript assumes the following:

If the string begins with "0x", the radix is 16 (hexadecimal)
If the string begins with "0", the radix is 8 (octal). This feature is deprecated
If the string begins with any other value, the radix is 10 (decimal)
Note: Only the first number in the string is returned! 

Note: Leading and trailing spaces are allowed.

Note: If the first character cannot be converted to a number, parseInt() returns NaN.

7. (https://www.w3schools.com/jsref/jsref_map.asp#:~:text=The%20map()%20method%20creates,in%20an%20array%2C%20in%20order.)

Definition:
The map() method creates a new array with the results of calling a function for every array element.

The map() method calls the provided function once for each element in an array, in order.

Note: map() does not execute the function for array elements without values.

Note: this method does not change the original array.     



8. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#:~:text=An%20arrow%20function%20expression%20is,cannot%20be%20used%20as%20constructors.)

Definition:
Arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the this, arguments, super, or new.target keywords. Arrow function expressions are ill suited as methods, and they cannot be used as constructors.
<!-- Only used the Arror function in one location -->