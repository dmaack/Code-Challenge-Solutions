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

// SOLUTION: 1 (2 For Loops)
    // O(n^2) time / O(1) sapce

const array = [3, 5, -4, 8, 11, 1, -1, 6]
const targetSum = 10

function twoNumberSum(array, targetSum) {

    // for iteration over array the length - 1 (6)
    for (let i = 0; i < array.length - 1; i++) {
        // store first number to compare (x)
        const firstNum = array[i]

        // second iteration will start at the number + 1 of the first 
        for (let j = i + 1; j < array.length; j++) {
            // store the second number to compare (y)
            const secondNum = array[j]
              
            // if x + y is equal to the target sum
            if (firstNum + secondNum === targetSum) {
                // return [x, y]
                return [firstNum, secondNum]
            }
        }
    }
        
    return []

};

// -------------------------------------------------------------

// SOLUTION: 2 (hashtable)
    // O(n) time / O(n) space

function twoNumberSum(array, targetSum) {
    // initalize hashtable
    const nums = {};

    // for each number in the array
    for (const num of array) {
        // possibleMatch is our y in the example y = 10 - x 
        const possibleMatch = targetSum - num;

        // if y is in our hashtable
        if(possibleMatch in nums) {
            // return [y, x]
            return [possibleMatch, num]
        
            // if its not in our hashtable, then add it and set it to true
        } else {
            num[num] = true
        }
    }

    // if you dont enter the if statement, just return empty array
    return []
};

// -------------------------------------------------------------

// SOLUTION: 3 (Sort)
    // O(nLog(n)) time / O(1) space
    
function twoNumberSum(array, targetSum) {

    array.sort((a,b) => a - b);
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        const currentSum = array[left] + array[right];

        if (currentSum === targetSum) {
            return [array[left], array[right]];
        } 
        else if(currentSum < targetSum) {
            left++;
        }
        else if (currentSum > targetSum) {
            right--;
        } 
    }

    return []
};