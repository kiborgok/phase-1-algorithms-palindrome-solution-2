function isPalindrome(word) {
  // iterate from the beginning of the string to the middle of the string
  let front = 0
  while(front < word.length / 2) {
    // compare the letter we're iterating over to the corresponding letter at the end of the string
    const back = word.length - 1 - front;
    if (word[front] !== word[back]) {
      // if the letters don't match, return false
      return false;
    }
    front++
  }

  // if we reach the middle, and all the letters match, return true
  return true;
}

/* 
  Add your pseudocode here
  iterate through input string from the back and the front comparing the values
  if you reach in the middle and all values are equal
    return true
  return false
*/

/*
  Add written explanation of your solution here
  isPalindrome() should take a str input and return true if it can be read the same even if reversed 
  and return false if it can not be read the same when reversed
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("alex"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("refer"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("civic"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("key"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("wq"));
}

module.exports = isPalindrome;
