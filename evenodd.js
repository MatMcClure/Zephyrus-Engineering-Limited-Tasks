
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
