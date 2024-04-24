const array = [  1, 2, 3, -4, -1, 4];

// Step 1 : Sort out all positive and negative numbers from array
const allPos = [];
const allNeg = [];
array.map((num) => {
  if (num >= 0) allPos.push(num);
  else allNeg.push(num);
});


//Step 2 : Find out the smallest length array from allPositive and allNegative
const smallestArrayLength = Math.min(allPos.length, allNeg.length);

//Step 3 : Start Rearranging it according to following logic
//   if first number of given array is positive - start with negative number
//   else - start with positive number
const result = [];
if (array[0] > 0) {
  for (let i = 0; i < smallestArrayLength; i++) {
    result.push(allNeg[i], allPos[i]);
  }
} else {
  for (let i = 0; i < smallestArrayLength; i++) {
    result.push(allPos[i], allNeg[i]);
  }
}

// Step 4 : Push the remaning number to the result array
//  if allPos length is more then allNeg , we have only positive numbers left
//  else we have only negative number left to be pushed into result

if (allPos.length > allNeg.length) {
  result.push(...allPos.slice(smallestArrayLength));
} else {
  result.push(...allNeg.slice(smallestArrayLength));
}

console.log(result, "result");
