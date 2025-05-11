///Filter Even Numbers from an Array

// Write a JavaScript function that does the following:

// Filters out only the even numbers from the array

// Doubles each even number

// Returns a new array with the final results


let numbers = [2, 8, 6, 10, 14]; // an array of actual numbers

function processEvenNumbers(arr) {
  let evenNumbers = arr.filter(function(num) {
    return num % 2 === 0;
  });

  // double the even numbers
  let doubledNumbers = evenNumbers.map(function(num) {
    return num * 2;
  });

  return doubledNumbers; 
}

// Call the function and store the result
let result = processEvenNumbers(numbers);

// Print the result to the console
console.log(result); // Output: [4, 16, 12, 20, 28]
