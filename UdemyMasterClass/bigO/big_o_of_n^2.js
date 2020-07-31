// Quadratic Time
    // 

    
// Log all pairs of array (1 1, 1 2, 1 3, 1 4, 1 5 ....)
const boxes = [1,2,3,4,5];

function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j])
        }
    }
}

logAllPairsOfArray(boxes);

// Nested for loops: 
    // O(n * n) = O(n^2) 
