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

// 2

let object1 = {
  ключ1: 100,
  ключ2: 100,
  ключ4: 50,
};

let object2 = {
  ключ2: 15,
  ключ3: 10,
};

let object3 = {
  ключ2: 10,
  ключ3: 10,
};
function combine() {
  var obj = {};

  for (var i = 0; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      obj[key] = obj[key] ? obj[key] + arguments[i][key] : arguments[i][key];
    }
  }
  function sortObjectByKeys(o) {
    return Object.keys(o).sort();
    //   .reduce((r, k) => ((r[k] = o[k]), r), {});
  }

  var sorted = sortObjectByKeys(obj); //{a: "ant", b: "boy", c: "crane"}
  //   let doublePrices = obj.fromEntries(
  //     // преобразовать в массив, затем map, затем fromEntries обратно объект
  //     Object.keys(obj).sort((a) => );
  //   );
  console.log(obj);
  return sorted;
}
console.log(combine(object1, object2, object3));
