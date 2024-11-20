
/*
  I define a function "fizzBuzz" that takes one parameter "n". Next, I 
  create an empty array to store the results. I used if statements within
  the for loop, which loops from 1 to n (100 in this case), to meet the 
  constraints of having "Fizz" print for multiples of 3, "Buzz" print for
  multiples of 5, and "FizzBuzz" print from multiples of both five and three.
  At the end I use console.log to call the function and log the output.
*/

var fizzBuzz = function(n) {
  let result = []
  for (let i = 1; i <= n; i++) {  // loops from 1 to n
    if (i % 3 == 0 && i % 5 == 0) {
      result.push("FizzBuzz")
    } else if (i % 3 == 0) {
      result.push("Fizz")
    } else if (i % 5 == 0) {
      result.push("Buzz")
    } else {
      result.push(i.toString())  // add number to string if it is not a multiple
    }
  }
  return result
};

console.log(fizzBuzz(100));