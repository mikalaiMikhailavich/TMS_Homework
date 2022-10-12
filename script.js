function getMaxSubSum(array) {
  let maxSum = 0;
  let minSum = array[0];
  let arraySum = [];
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = i; j < array.length; j++) {
      sum += array[j];
      maxSum = Math.max(maxSum, sum);
      minSum = Math.min(minSum, sum);

      // arraySum.push(sum);
    }
  }
  // console.log(arraySum);
  // let arraySum0 = arraySum[0];
  // let arraySum1 = arraySum[0];
  // console.log(arraySum0);
  // for (let i = 0; i < arraySum.length; i++) {
  //   if (arraySum0 < arraySum[i]) {
  //     arraySum0 = arraySum[i];
  //   }
  // }

  // for (let i = 0; i < arraySum.length; i++) {
  //   if (arraySum1 > arraySum[i]) {
  //     arraySum1 = arraySum[i];
  //   }
  // }
  return [maxSum, minSum];
}

console.log(getMaxSubSum([1, 2, 3, -4, 5]));
