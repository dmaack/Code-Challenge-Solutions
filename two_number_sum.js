// NOTES
// array
// write a function to find if there is a pair of numbers that add up to the target sum
// traverse array
    // option 1: 2 for loops O(n)^2
    // option 2: sorting array and pointers on left and right -> move pointers based on whether sum is less or greater than target O(nLogn) time O(n) time
    // option 3: hash table -- extra space but faster time

    // check if the number needed to add up to target sum is in hash table

// EX:
    // targetSum = 10
    // currNum = x
    // y ?
    // x + y = 10 || y = 10 - x -> if y is in hashtable, then we return x and y

    // Time Complexity
        // O(n) -- traversing only once and solving for y and accessing values in hash table
    // Space Complexity
        // O(n) -- we are adding values to hash table


// -------------------------------------------------------------

// 2 For Loops
const array = [3, 5, -4, 8, 11, 1, -1, 6]
const targetSum = 10

function twoNumberSum(array, targetSum) {

      for (let i = 0; i < array.length - 1; i++) {
          const firstNum = array[i]

          for (let j = i + 1; j < array.length; j++) {
              const secondNum = array[j]
              
              if (firstNum + secondNum === targetSum) {
                  console.log('firstNum and secondNum', firstNum, secondNum)
                  return [firstNum, secondNum]
                }
            }
        }
        
        return []
};

console.log(twoNumberSum(array, targetNum))
