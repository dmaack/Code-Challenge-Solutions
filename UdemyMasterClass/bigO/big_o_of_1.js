// Constant Time O(1)
    // ex: grabbing the first item in the array
    // very scalable


const boxes = [0,1,2,3,4,5]

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
};

logFirstTwoBoxes(boxes) // O(2) --> O(1)

