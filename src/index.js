var isHappy = function(n) {
  let arr = n
    .toString()
    .split("")
    .map(a => parseInt(a, 10));
  let result = arr.reduce((a, b) => Math.pow(a, 2) + Math.pow(b, 2));
  if (result === 1) {
    return true;
  } else if (result !== 1) {
    return isHappy(result);
  }

  return false;
};

console.log(isHappy(23)); //should be true
console.log(isHappy(19));
// console.log(isHappy(2))
//2^2=4
//4^2=8
//8^2=16
//1^2+6^2 =
//2^2 + 3^2=4+9=13
//1^2+3^2=1+9=10;
//1^2+0^2=1;
