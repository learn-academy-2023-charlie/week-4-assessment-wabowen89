// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// Pseudo Code:
  // Input: Array
  // Output: Array
  // Process:
    // Function Name: modArray 
    // Assign parameter name 'array' to the function
    // Remove first element from the given array (possible tool: shift() method)
    // Shuffle the remaining elements in the given array (possible tool: sort() method)
    // Return the modified array
  // Expected Output: ["yellow", "blue", "pink", "green"]
                   // ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

describe("modArray", () => {
  it ("removes the first item from the array and shuffles the remaining content.", () => {

    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

    expect(["yellow", "blue", "pink", "green"]).toEqual(expect.arrayContaining(modArray(colors1)))
    expect(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]).toEqual(expect.arrayContaining(modArray(colors2)))

  })
})

// describe('arrayContaining', () => {
//   const expected = ['Alice', 'Bob'];
//   it('matches even if received contains additional elements', () => {
//     expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
//   });
//   it('does not match if received does not contain expected elements', () => {
//     expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
//   });
// });


// Good failure due to modArray() not defined
// FAIL  ./code-challenges.test.js
// modArray
//   ✕ removes the first item from the array and shuffles the remaining content. (1 ms)

// ● modArray › removes the first item from the array and shuffles the remaining content.

//   ReferenceError: modArray is not defined


// b) Create the function that makes the test pass.

// const modArray = (array) => {

//   // .shift() removes the first element in given array
//   array.shift()
//   // .sort() with the Math.ranomd() - .5 randomly shuffles the array
//   array.sort((a,b) => Math.random() - .5)
//   return array

// }

// Success
// PASS  ./code-challenges.test.js
// modArray
//   ✓ removes the first item from the array and shuffles the remaining content. (1 ms)

// Refactor

// Pseudo Code:
  // Process:
    // Combine both the removal function and the sorting function into one line of code
    // shift() removes and returns the first element of the array, not the array itself. Cannot be use with sort()
    // Use slice() instead of shift(). Removes first element and returns the remaining array
    // Combine with .sort()
    // Return on one line
  // Expected Output: ["yellow", "blue", "pink", "green"]
                   // ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

const modArray = (array) => {

  // Removes first element from array. Sorts remaining elements in array. Returns shuffled array.
  return array.slice(1).sort((a,b) => Math.random() - .5)

}

// Success
// PASS  ./code-challenges.test.js
// modArray
//   ✓ removes the first item from the array and shuffles the remaining content. (1 ms)



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

// Pseudo Code:
  // Input: Object
  // Output: Number
  // Process:
    // Function Name: endTally 
    // Assign parameter name 'object'
    // Create temporary array variable
    // Convert object into array of the values and assign to the temporary array (possible tool: Object.values() method)
    // Subtract objects second value from it's first value
    // return resulting number
  // Expected Output: 11
                  // -31

describe("endTally", () => {

  const votes1 = { upVotes: 13, downVotes: 2 }
  // Expected output: 11
  const votes2 = { upVotes: 2, downVotes: 33 }
  // Expected output: -31

  it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
    expect(endTally(votes1)).toEqual(11)
    expect(endTally(votes2)).toEqual(-31)
  })
})


// Good failure due to  not defined
// FAIL  ./code-challenges.test.js
// modArray
//   ✓ removes the first item from the array and shuffles the remaining content. (1 ms)
// endTally
//   ✕ takes in an object that contains up votes and down votes and returns the end tally.

// ● endTally › takes in an object that contains up votes and down votes and returns the end tally.

//   ReferenceError: endTally is not defined


// b) Create the function that makes the test pass.

// const endTally = (object) => {
  
//   let array = Object.values(object)
//   return array[0] - array[1]

// }

// Success
// PASS  ./code-challenges.test.js
// modArray
//   ✓ removes the first item from the array and shuffles the remaining content. (1 ms)
// endTally
//   ✓ takes in an object that contains up votes and down votes and returns the end tally. (1 ms)

// Refactor

// Pseudo Code:
  // Process:
    // Remove temporary array
    // Reference each value directly (possible tool: use object key reference)
    // Subtract objects second value from it's first value
    // Return on one line
  // Expected Output: 11
                   // -31

const endTally = (object) => {
  
  return object.upVotes - object.downVotes

}

// Success
// PASS  ./code-challenges.test.js
// modArray
//   ✓ removes the first item from the array and shuffles the remaining content. (1 ms)
// endTally
//   ✓ takes in an object that contains up votes and down votes and returns the end tally.



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// Pseudo Code:
  // Input: Two arrays
  // Output: One Array
  // Process:
    // Function Name: remDups
    // Assign parameter names 'array1' and 'array2'
    // Create new temporary array
    // Iterate through the second array (possible tool: for loop)
    // Check to see if current value of second array is in the temporary array (possible tool: conditionals and includes() method)
    // Add current value of second array to temporary if not in temporary array (possible tool: push() method)
    // return temporary array
  // Expected Output:["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe("remDups", () => {

  const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
  const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
  // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
  
  it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
    expect(remDups(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })

})

// Good failure due to  not defined
// FAIL  ./code-challenges.test.js
// modArray
//   ✓ removes the first item from the array and shuffles the remaining content. (1 ms)
// endTally
//   ✓ takes in an object that contains up votes and down votes and returns the end tally. (1 ms)
// remDups
//   ✕ takes in two arrays as arguments and returns one array with no duplicate values.

// ● remDups › takes in two arrays as arguments and returns one array with no duplicate values.

//   ReferenceError: remDups is not defined


// b) Create the function that makes the test pass.

// const remDups = (array1, array2) => {

//   let array = array1

//   for(let i = 0; i < array2.length; i++) {
//     if(!array1.includes(array2[i])) {
//       array.push(array2[i])
//     }
//   }

//   return array
// }

// Success
// PASS  ./code-challenges.test.js
// modArray
//   ✓ removes the first item from the array and shuffles the remaining content. (2 ms)
// endTally
//   ✓ takes in an object that contains up votes and down votes and returns the end tally.
// remDups
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values.

// Refactor
// Pseudo Code:
  // Process:
    // Remove temporary array
    // Iterate through second array
    // Compare current value of second array to first array (possible tool: ternary and includes() method)
    // Add current value of second array to first array 
    // return first array
  // Expected Output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// const remDups = (array1, array2) => {
  
//   for(let i = 0; i < array2.length; i++) {
//     !array1.includes(array2[i]) ? array1.push(array2[i]) : null
//   }

//   return array1
// }

  // Success
  // PASS  ./code-challenges.test.js
  // modArray
  //   ✓ removes the first item from the array and shuffles the remaining content. (1 ms)
  // endTally
  //   ✓ takes in an object that contains up votes and down votes and returns the end tally.
  // remDups
  //   ✓ takes in two arrays as arguments and returns one array with no duplicate values.

// Refactor 2
// Pseudo Code:
  // Process:
    // Remove for loop
    // Iterate through second array (possible tool: filter() method)
    // Check to see if current value of second array is in the first array (possible tool: includes())
    // Combine filter array with first array (possible tool: concat() method)
    // Return on one line
  // Expected Output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

const remDups = (array1, array2) => {

  return array1.concat(array2.filter(value => !array1.includes(value)))

}

// Success
// PASS  ./code-challenges.test.js
// modArray
//   ✓ removes the first item from the array and shuffles the remaining content. (1 ms)
// endTally
//   ✓ takes in an object that contains up votes and down votes and returns the end tally.
// remDups
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values. (1 ms)
