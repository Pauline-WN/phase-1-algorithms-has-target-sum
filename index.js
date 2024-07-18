// Function definition for hasTargetSum
function hasTargetSum(array, target) {
  let complements = {}; // Initialize an object to store complements

  // Iterate through the array of numbers
  for (let num of array) {
    let complement = target - num; // Calculate the complement needed to reach the target

    if (complements[complement]) {
      return true; // Found a pair that sums up to the target
    }

    complements[num] = true; // Store the current number in the complements object
  }

  return false; // If no pairs are found, return false
}

/* 
  Write the Big O time complexity of your function here
*/
// O(n) - Linear time complexity, where n is the number of elements in the array

/* 
  Add your pseudocode here
*/
// Initialize an empty object called complements
// Iterate through each number in the array
  // Calculate the complement (target - current number)
  // Check if the complement exists in the complements object
    // If yes, return true (pair found)
    // If no, store the current number in the complements object
// If no pairs are found after iterating through the array, return false

/*
  Add written explanation of your solution here
*/
// The function uses a hash map (object) to store complements of numbers as it iterates through the array.
// It checks if the current number's complement (required to reach the target) exists in the hash map.
// If found, it means a pair exists that sums up to the target, and it returns true.
// If no such pair is found after iterating through the array, it returns false.
// This approach ensures efficient lookup and insertion operations, achieving linear time complexity O(n).

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
