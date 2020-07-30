// What is good code?
    // 1. Readble
    // 2. Scalable:
        // 
const nemo = ['nemo'];

function findNemo(array) {
    // let t0 = performance.now()
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            return 'found nemo';
        }
    }

    // let t1 = performance.now()
    // console.log(t1-t0)
};

console.log(findNemo(nemo));

// How to measure the Big O of the code above?
// It's linear time O(n) 
    // if there are 1 element in an a array it would take 1 operation, if there were 2 elements in the array it would take 2 operations
    // for loops, forEach() are most commonly O(n) - Linear Time