
/*
  My left pointer is set to 0 to start at the beginning of the 
  string, and my right pointer is set to the length of string minus
  one to begin at the end. My while loop contains "left < right"
  so that when the pointers meet in the middle the loop stops.
  The loop starts with our temp variable being set to the last
  character in the string. As the while loop progresses, s[right]
  becomes s[left], the beginning of the string. Then s[left]
  becomes our temp variable. The while loop will then continue
  to increment from the left and decrement from the right until
  there are no more characters left.
*/

var reverseString = function(s) {
  let left = 0,  // left pointer starts at 0 (beginning of string), right pointer at the end of string
    right = s.length - 1  
  while (left < right) {  // checks to see if anymore swapping is neccesary
    temp = s[right]  // temp holder for string variable
    s[right] = s[left]
    s[left] = temp
    left++ 
    right--
  }
  return s
};

let input = ['h', 'e', 'l', 'l', 'o']; 
console.log(input);

reverseString(input); // reverse the string in-place

console.log(input);
