// Let's say a positive integer is a superpalindrome if it is a palindrome, and it is also the square of a palindrome.
//
// Now, given two positive integers L and R (represented as strings), return the number of superpalindromes in the inclusive range [L, R].
/**
 * @param {string} L
 * @param {string} R
 * @return {number}
 */
var superpalindromesInRange = function(L, R) {
  const left = parseInt(L);
  const right = parseInt(R);
};

var isPalindrome = function(n) {
  return n === parseInt(String(n).split("").reverse().join(""));
}
