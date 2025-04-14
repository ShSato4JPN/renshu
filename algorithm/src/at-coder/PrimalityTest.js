/**
 * 与えられた数値が素数かどうか判定する関数
 * @param {number} value - 判定する数値
 * @returns {boolean} 素数の場合true、そうでない場合false
 */
const isPrime = (value) => {
  // 入力値のチェック
  if (value < 2 || value > Math.pow(10, 13)) {
    console.log(`2 <= value <= 10^13 の範囲で入力してください`);
    return null;
  }

  // 2は素数
  if (value === 2) return true;

  // 2以外の偶数は素数ではない
  if (value % 2 === 0) return false;

  // 3以上の奇数についてチェック
  // √value まで調べれば十分（それより大きい約数があれば、それに対応する小さい約数が√value以下にある）
  const sqrtValue = Math.floor(Math.sqrt(value));

  // 3から√valueまでの奇数で割り切れるかチェック
  for (let i = 3; i <= sqrtValue; i += 2) {
    if (value % i === 0) {
      return false;
    }
  }

  return true;
};

// 関数を実行して結果を表示
const sosu = (value) => {
  const result = isPrime(value);

  if (result === null) return;

  if (result) {
    console.log(`${value} は素数です！`);
  } else {
    console.log(`${value} は素数ではありません！`);
  }
};

// テスト
console.time('素数判定');
sosu(472249589291);
console.timeEnd('素数判定');

// 追加のテスト例
// console.time('素数判定 - 2');
// sosu(2);
// console.timeEnd('素数判定 - 2');

// console.time('素数判定 - 17');
// sosu(17);
// console.timeEnd('素数判定 - 17');

// console.time('素数判定 - 100');
// sosu(100);
// console.timeEnd('素数判定 - 100');