/**
 * マトリックスを螺旋状に走査する効率的な実装
 * @param {number[][]} matrix - 走査する2次元配列
 * @returns {number[]} - 螺旋状に並べた要素の配列
 */
function spiralOrder(matrix) {
  // 入力チェック
  if (!matrix.length || !matrix[0].length) return [];

  const result = [];

  // 境界の初期化
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  // マトリックスの要素がすべて走査されるまで繰り返し
  while (top <= bottom && left <= right) {
    // 上の行: 左から右へ
    for (let col = left; col <= right; col++) {
      result.push(matrix[top][col]);
    }
    top++;

    // 右の列: 上から下へ
    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    right--;

    // 下の行: 右から左へ (topがbottomを超えていないことを確認)
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        result.push(matrix[bottom][col]);
      }
      bottom--;
    }

    // 左の列: 下から上へ (leftがrightを超えていないことを確認)
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        result.push(matrix[row][left]);
      }
      left++;
    }
  }

  return result;
}

// サンプルデータ
const _matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

// 実行と結果の表示
console.log(spiralOrder(_matrix));