// Regex validate PIN code

/* 

Description:
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false


*/

// My solution:

function validatePIN(pin) {
  if (/^(\d{4}|\d{6})$/.test(pin)) {
    return true;
  } else {
    return false;
  }
}

// 使用正規表示法
// 參考stackoverflow:https://stackoverflow.com/questions/49179722/regex-validate-pin-code-js
