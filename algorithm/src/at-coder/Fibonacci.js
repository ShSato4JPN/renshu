/**
 * メモ化を使ったフィボナッチ数列の計算
 * @param {number} n - 何番目のフィボナッチ数を計算するか
 * @return {number} n番目のフィボナッチ数
 */
function fibonacci(n) {
  const arr = [0 ,1]

  for (let i = 1; i < n; i++) {
    arr.push(arr[i] + arr[i - 1])
  }

  return arr.at(-1)
}

// テストケース
console.log(fibonacci(10)); // 55を返すはず
console.log(fibonacci(40)); // 効率的な実装なら素早く計算できるはず


// /**
//  * メモ化を使ったフィボナッチ数列の計算
//  * @param {number} n - 何番目のフィボナッチ数を計算するか
//  * @return {number} n番目のフィボナッチ数
//  */
// function fibonacci(n, memo = {}) {
//   // 基底ケース
//   if (n <= 1) return n;

//   // すでに計算済みならメモから取得
//   if (memo[n] !== undefined) {
//     return memo[n];
//   }

//   // 再帰的に計算し、結果をメモに保存
//   memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
//   return memo[n];
// }

// // テストケース
// console.log(fibonacci(10)); // 55を返す
// console.log(fibonacci(40)); // 102334155を返す