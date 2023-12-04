/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

// Function to count the number of vowels in a string
function countVowels(str) {
  // Use a regular expression to match vowels (both uppercase and lowercase)
  const vowelRegex = /[aeiou]/gi;

  // Use match method to find all matches and return the count
  const matches = str.match(vowelRegex);

  // Return the count of vowels (null-safe)
  return matches ? matches.length : 0;
}

module.exports = countVowels;
