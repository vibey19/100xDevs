/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

// Function to find the largest element in an array
function findLargestElement(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
      return undefined; // Return undefined for an empty array
    }
  
    // Assume the first element is the largest
    let largest = numbers[0];
  
    // Iterate through the rest of the elements to find the largest
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i];
      }
    }
  
    return largest;
  }
  
  module.exports = findLargestElement;
  