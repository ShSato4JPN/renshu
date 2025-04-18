const { a } = require("vitest/dist/chunks/suite.d.FvehnV49.js");

/**
 * ソート済み配列から二分探索で要素を検索する
 * @param {number[]} array - ソート済みの配列
 * @param {number} target - 検索対象の値
 * @return {number} 見つかった場合はインデックス、見つからなければ-1
 */
function binarySearch(array, target) {
  let start = 0, end = array.length - 1

  while (start <= end) {
    const midIdx = Math.floor((start + end) / 2)
    const midVal = array[midIdx];

    if (midVal === target) {
      return midIdx
    } else if (midVal < target){
      start = midIdx + 1;
    } else {
      end = midIdx - 1
    }
  }

  return -1
}

// テストケース
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
console.log(binarySearch(sortedArray, 7)); // 3を返すはず
console.log(binarySearch(sortedArray, 10)); // -1を返すはず


/**
 * メモ化を使ったフィボナッチ数列の計算
 * @param {number} n - 何番目のフィボナッチ数を計算するか
 * @return {number} n番目のフィボナッチ数
 */
function fibonacci(n) {
  const data = [0, 1]

  for (let i = 1; i < n; i++) {
    data.push(data[i] + data[i - 1])
  }

  return data.slice(-1)[0]
}

// テストケース
console.log(fibonacci(10)); // 55を返すはず
console.log(fibonacci(40)); // 効率的な実装なら素早く計算できるはず

/**
 * 指定金額を支払うのに必要な硬貨の最小枚数を計算（貪欲法）
 * @param {number[]} coins - 利用可能な硬貨の種類（降順）
 * @param {number} amount - 支払う金額
 * @return {number} 必要な硬貨の最小枚数。支払えない場合は-1
 */
function minCoins(coins, amount) {
  let currentAmount = amount

  const result = coins.map(coin => {
    const num = Math.floor(currentAmount / coin)
    currentAmount = currentAmount % coin

    return num;
  })

  return result;
}

// 日本の硬貨システム
const japanCoins = [500, 100, 50, 10, 5, 1];
console.log(minCoins(japanCoins, 1234)); // 10枚（500×2 + 100×2 + 10×3 + 1×4）

// アメリカの硬貨システム
const usCoins = [25, 10, 5, 1]; // クォーター、ダイム、ニッケル、ペニー
console.log(minCoins(usCoins, 99)); // 9枚（25×3 + 10×2 + 1×4）


const _matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]]
const _saveData = []

function loopMatrix(saveData, matrix) {
  if (matrix.length === 0) {
    return saveData
  }

  matrix[0].forEach(v => saveData.push(v))

  if (2 < matrix.length ) {
    for (let i = 1; i < matrix.length - 1; i++) {
      saveData.push(matrix[i].splice(-1)[0])
    }
  }

  matrix[matrix.length - 1].reverse().forEach(v => {
    saveData.push(v)
  })

  if (2 < matrix.length ) {
    for (let i = matrix.length - 2; 0 < i; i--) {
      saveData.push(matrix[i].splice(0, 1)[0])
    }
  }

  matrix = matrix.splice(1, matrix.length - 2)


  return loopMatrix(saveData, matrix)
}

console.log(loopMatrix(_saveData, _matrix))





const unsorted = [8,2,7,6,9,1,4,3,5];

let count = 0

function quickSort(arr, start, end) {
  let left = start, right = end

  const pivot = arr[Math.floor((start + end) / 2)]

  while (true) {
    while (arr[left] < pivot) {
      left++
    }

    while (pivot < arr[right]) {
      right--
    }

    if (right <= left) {
      break;
    }

    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    left++
    right--
  }

  if (start < left - 1) quickSort(arr, start, left - 1)
  if (right + 1 < end) quickSort(arr, right + 1, end)
}

quickSort(unsorted, 0, unsorted.length - 1)
console.log(unsorted)


function mergeSort(arr) {
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const result = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }
}


// テスト
const _unsorted = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(_unsorted)); // [3, 9, 10, 27, 38, 43, 82]