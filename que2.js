const arr = [1, 2, 6, 3, 2];

let largestNum = 0;

function getLargestPositive() {
  arr.forEach((num) => {
    if (largestNum < num) largestNum = num;
  });
  return largestNum+1;
}

console.log(getLargestPositive());
