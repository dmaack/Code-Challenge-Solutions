// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; // asign variable a as 10, it only runs once --> O(1)
    a = 50 + 3; // reassigning a --> O(1)
  
    for (let i = 0; i < input.length; i++) { // for loop depending on what the input is --> O(n) where n is the input
      anotherFunction(); // O(n) because it depends on how long our input is
      let stranger = true;  // it depends on the input O(n)
      a++; // O(n)
    }
    return a; //  only runs once O(1)
  };

// The total of this exercise:
  // 3 + n + n + n + n = BIG O(3 + 4n) --> O(n)

