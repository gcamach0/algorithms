const input = 121;

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  const string = x.toString();
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  console.log(string);
  console.log(reversed);
  return string === reversed;
};

console.log(isPalindrome(input));
