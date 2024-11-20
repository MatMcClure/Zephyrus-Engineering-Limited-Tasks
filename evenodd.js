
/*
  The if statement determines to return odd or even by 
  dividing the number by 2. The statement first checks
  if the number is even; if not, it returns odd.
*/

function isEvenOrOdd(num) {
  if (num % 2 == 0) {  // num is divided by 2
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(isEvenOrOdd(3)); 

console.log(isEvenOrOdd(8)); 


/*
  The code below is similar to the top except it ask for a user input.
  I used prompt as a built in function to display the request. I use parseInt
  to convert the string into an integer, and in my if statement, "isNaN" is used
  to make sure the input is an integer. If not, the user will be asked to input a 
  valid integer. If a valid integer is entered, "Even" or "Odd" will be printed.
/*

function isEvenOrOdd() {
  const input = prompt("Input a number:"); 
  const num = parseInt(input);

  if (isNaN(num)) {
    console.log("Please enter a valid integer.");
  } else {
    console.log(num % 2 == 0 ? "Even" : "Odd");
  }
}

isEvenOrOdd();
*/
