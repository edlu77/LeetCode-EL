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
  let n = Math.ceil(left**.5);
  let m = Math.floor(right**.5);
  let count = 0;
  for (let i=n; i<=m; i++) {
    if (isPalindrome(String(i))) {
      if (isPalindrome(String(i**2))) {
        count += 1
      };
    };
  };
  return count;
};

var isPalindrome = function(num) {
  // return n === parseInt(String(n).split("").reverse().join(""));
  if (num.length <= 1) return true;
  if (num[0] != num[num.length-1]) return false;
  return isPalindrome(num.slice(1, num.length-1));
}

// 43/48, cannot handle largest number case
