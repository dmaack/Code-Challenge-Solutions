// -------------------------------------------------------------

// SOLUTION: 1

function getNthFib(n) {
    // Write your code here.
      console.log(n)
      if(n === 1) {
          return 0
      } else if (n === 0) {
          return []
      }
      
      const result = [0, 1]
      
      for (let i = 2; i < n; i++) {
          const a = result[i - 1]
          const b = result[i - 2]
          
          result.push(a + b)
      }
      console.log('result', result)
      
       return result[n-1]	
  }
  
  // Do not edit the line below.
  exports.getNthFib = getNthFib;
  