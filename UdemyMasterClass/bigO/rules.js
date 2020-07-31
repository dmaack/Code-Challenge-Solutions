// Rule #1: 
    // Worst Case

// Rule #2:
    // Remove Constants
        // if you have a big o of 3 + n + n/2 it just resolves to O(n)

// Rule #3: 
    // Different terms for inputs

function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function(boxes) {
        console.log(boxes)
    });

    boxes2.forEach(function(boxes2) {
        console.log(boxes2)
    })
}

// O(a + b) or O(n + m)

// Rule #4:
    // Drop non dominance
        // 

function printAllNumbersThenAllPairSums(numbers) {
    console.log('these are numbers');
    numbers.forEach(function(number) {
        console.log(number);
    })

    console.log('and these are their sums');
    numbers.forEach(function(firstNumber) {
        numbers.forEach(function(secondNumber) {
            console.log(firstNumber + secondNumber);
        })
    })
}

console.log(printAllNumbersThenAllPairSums([1,2,3,4,5]));

// O(n) + O(n^2) --> we want to drop the non dominant term =
    // so it resolves to O(n^2)