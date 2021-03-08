//      Regex validate PIN code

/*      Instructions
description: https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.

        Examples
validatePIN('1111') ==> true
validatePIN('123456') ==> true
validatePIN('-1.234') ==> false
validatePIN('00000000') ==> false
*/

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}

console.log(validatePIN('1111'))
console.log(validatePIN('123456'))
console.log(validatePIN('-1.234'))
console.log(validatePIN('00000000'))

// node "Regex validate PIN code"