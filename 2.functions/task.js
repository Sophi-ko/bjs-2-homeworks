function getArrayParams(...arr) {
  let min = -Infinity;
  let max = +Infinity;
  let sum = 0;
  let avg = 0;

  max = Math.max(...arr);
  min = Math.min(...arr);
  sum = arr.reduce(
  (currentSum, currentNumber) => currentSum + currentNumber
  );
  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;    
  } else {
     return arr.reduce(
      (currentSum, currentNumber) => currentSum + currentNumber
    );
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;    
  } else {
    let max = Math.max(...arr)
    let min = Math.min(...arr);
    return max - min;
  }
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;    
  } else {
    let sumEvenElement = 0;
    let sumOddElement = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];      
      }
    }

    return sumEvenElement - sumOddElement;
  }
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;    
  } else {
    let sumEvenElement = 0;
    let countEvenElement = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    }

    return sumEvenElement / countEvenElement;
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;      
    }
  }

  return maxWorkerResult;
}
