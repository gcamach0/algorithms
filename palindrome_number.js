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
  return string === reversed;
};

const mathSolution = (x) => {
  if (x < 0) return false;
  let reverse = 0;
  let aux = x;
  while (aux >= 1) {
    reverse = reverse * 10 + (i % 10);
    aux = Math.floor(i / 10);
  }
  return reverse === x;
};

console.log(isPalindrome(input));
console.log(mathSolution(input));
