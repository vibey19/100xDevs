/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// Function to check if two strings are anagrams
function isAnagram(str1, str2) {
  // Clean and preprocess input strings for case-insensitive comparison
  const processedStr1 = preprocessString(str1);
  const processedStr2 = preprocessString(str2);

  // Check if the lengths are the same
  if (processedStr1.length !== processedStr2.length) {
    return false;
  }

  // Create character frequency maps for each processed string
  const frequencyMap1 = createCharacterFrequencyMap(processedStr1);
  const frequencyMap2 = createCharacterFrequencyMap(processedStr2);

  // Compare the character frequency maps
  return areFrequencyMapsEqual(frequencyMap1, frequencyMap2);
}

// Helper function to create a character frequency map for a string
function createCharacterFrequencyMap(str) {
  const frequencyMap = {};

  // Iterate through each character in the string
  for (const char of str) {
    // Update the character count in the frequency map
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }

  // Return the resulting frequency map
  return frequencyMap;
}

// Helper function to compare two character frequency maps
function areFrequencyMapsEqual(map1, map2) {
  // Iterate through keys (characters) in the first frequency map
  for (const key in map1) {
    // Check if the character counts are equal in both frequency maps
    if (map1[key] !== map2[key]) {
      return false;
    }
  }

  // If the loop completes without returning false, frequency maps are equal
  return true;
}

// Helper function to preprocess a string (remove spaces, convert to lowercase)
function preprocessString(str) {
  // Remove spaces and convert the string to lowercase
  return str.replace(/\s/g, '').toLowerCase();
}

// Export the main function for external use
module.exports = isAnagram;

