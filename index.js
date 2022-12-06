function isPalindrome(word) {
  for(let i=0; i<word.length; i++){
    if(word.charAt(i) == word.charAt(word.length -1 - i)){
      return true;
    }
    else{
      return false;
    }
  }
}

/* 
  ----PSUEDOCODE-----
  FOR the length of each word, test IF each opposing letter matches.
  IF the character at the first space matches the charcter at the last space...
  and IF the character at the second space matches the character at the last space -1...
  etc
  then RETURN true...
  otherwise, RETURN false.
*/

/*
  create a function called isPalindrome that takes a string for an 
  argument and returns whether that string is a palindrome.

  isPalindrome function takes (1) argument that is a (string)
  returns true if the string is palindrome
  returns false if the string is NOT palindrome

  should test whether the first and last characters are the same, and work in.
  For example, if the argument is toot ---> test if t(1st) and t(4th) are the same, 
  and o(2nd) and o(3rd) are the same.

  how do i do this for varying lengthed words? use for statment and .length?
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
 
}

module.exports = isPalindrome;
