/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0,                // left pointer starts at 0 (beginning of string), right pointer at the end of string
    right = s.length - 1  
  while (left < right) {     // checks to see if anymore swapping is neccesary
    temp = s[right]          // temp holder for string variable
    s[right] = s[left]
    s[left] = temp
    left++                  // updates the left(incrementing) and right(decrementing) pointer
    right--
  }
  return s
};

let input = ['h', 'e', 'l', 'l', 'o']; // example input
console.log("Before reversing:", input);

reverseString(input); // Reverse the string in-place

console.log("After reversing:", input);