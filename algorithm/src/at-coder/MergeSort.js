/**
 * マージソートで配列を整列する
 * @param {number[]} array - ソートする配列
 * @return {number[]} ソート済みの新しい配列
 */
function mergeSort(array) {
  // 配列の長さが1以下なら、そのまま返す（分割の終了条件）
  if (array.length <= 1) {
    return array;
  }

  // 配列を半分に分割
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // 分割した配列をそれぞれソートして結合
  return merge(mergeSort(left), mergeSort(right));
}

/**
 * 2つのソート済み配列を結合
 * @param {number[]} left - 左側のソート済み配列
 * @param {number[]} right - 右側のソート済み配列
 * @return {number[]} 結合してソートされた配列
 */
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // 両方の配列に要素がある間は比較して小さい方を追加
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // 残った要素を追加
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// テスト
const unsorted = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(unsorted)); // [3, 9, 10, 27, 38, 43, 82]