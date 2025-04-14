/**
 * ソート済み配列から二分探索で要素を検索する
 * @param {number[]} array - ソート済みの配列
 * @param {number} target - 検索対象の値
 * @return {number} 見つかった場合はインデックス、見つからなければ-1
 */
function binarySearch(array, target) {
  let start = 0
  let end = array.length - 1

  while (start <= end) {
    const index = Math.floor((start + end) / 2)
    const middleValue = array[index]

    if (middleValue === target) {
      return index;
    } else if (middleValue < target) {
      start = index + 1;
    } else {
      end = index - 1;
    }
  }

  return -1
}

// テストケース
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
console.log(binarySearch(sortedArray, 7)); // 3を返すはず
console.log(binarySearch(sortedArray, 10)); // -1を返すはず

// /**
//  * ソート済み配列から二分探索で要素を検索する
//  * @param {number[]} array - ソート済みの配列
//  * @param {number} target - 検索対象の値
//  * @return {number} 見つかった場合はインデックス、見つからなければ-1
//  */
// function binarySearch(array, target) {
//   let left = 0;
//   let right = array.length - 1;

//   while (left <= right) {
//     // 中央の要素のインデックスを計算
//     const mid = Math.floor((left + right) / 2);

//     // 中央の要素と探索値を比較
//     if (array[mid] === target) {
//       return mid; // 一致したらそのインデックスを返す
//     } else if (array[mid] < target) {
//       left = mid + 1; // 探索値が中央値より大きい場合、右半分を探索
//     } else {
//       right = mid - 1; // 探索値が中央値より小さい場合、左半分を探索
//     }
//   }

//   return -1; // 見つからなかった場合
// }

// // テストケース
// const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
// console.log(binarySearch(sortedArray, 7)); // 3を返す
// console.log(binarySearch(sortedArray, 10)); // -1を返す