function isPalindrome(word) {
  // Write your algorithm here
  if (word === word.split("").reverse().join("")){
    return true
  }
  else return false
}

/* 
  Add your pseudocode here
  write a function that takes one argument (a string).
  returns either "true" or "false".
  if the string reads the same forwards and backwards, return true.
  if the string does not read the same forwards and backwards, return false.
*/

/*
  Add written explanation of your solution here
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
