//Methods: Minimum;
//#1 Your code here.
console.log("#1 Minimum");

function getMinimum(num1, num2) {
  return num1 < num2 ? num1 : num2;
}

console.log(getMinimum(0, 10));
// → 0
console.log(getMinimum(0, -10));
// → -10

//Recursion;
//#2 Your code here.
console.log("#2 Recursion");
function isEven(num) {
  if (num == 0) return true;
  if (num == 1) return false;
  if (num < 0) return isEven(-num);

  return isEven(num - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//Bean Counting
//#3 Your code here.
let count = 0;

function countBs(input) {
  for (let element of input) {
    if (element.toUpperCase() == "B") count++;
  }
  return count;
}

function countChars(input, character) {
  count = 0;
  for (const element of input) {
    if (element == character) count++;
  }
  return count;
}

console.log(countBs("BOB"));
// → 2
console.log(countChars("kakkerlak", "k"));
// → 4
