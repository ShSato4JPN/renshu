/**
 * 指定金額を支払うのに必要な硬貨の最小枚数を計算（貪欲法）
 * @param {number[]} coins - 利用可能な硬貨の種類（降順）
 * @param {number} amount - 支払う金額
 * @return {number} 必要な硬貨の最小枚数。支払えない場合は-1
 */
function minCoins(coins, amount) {
  const data = []

  for (let i = 0; i < coins.length; i++) {
    //console.log(`Math.floor(${amount} / ${coins[i]})`)
    const num =  Math.floor(amount / coins[i])

    data.push(num)

    amount = amount % coins[i]
  }
}

// 日本の硬貨システム
const japanCoins = [500, 100, 50, 10, 5, 1];
console.log(minCoins(japanCoins, 1234)); // 10枚（500×2 + 100×2 + 10×3 + 1×4）

// アメリカの硬貨システム
const usCoins = [25, 10, 5, 1]; // クォーター、ダイム、ニッケル、ペニー
console.log(minCoins(usCoins, 99)); // 9枚（25×3 + 10×2 + 1×4）



// /**
//  * 指定金額を支払うのに必要な硬貨の最小枚数を計算（貪欲法）
//  * @param {number[]} coins - 利用可能な硬貨の種類（降順）
//  * @param {number} amount - 支払う金額
//  * @return {number} 必要な硬貨の最小枚数。支払えない場合は-1
//  */
// function minCoins(coins, amount) {
//   // 0円の場合は0枚
//   if (amount === 0) return 0;

//   // 負の金額は計算できない
//   if (amount < 0) return -1;

//   let remainingAmount = amount;
//   let totalCoins = 0;

//   // 貪欲法：大きい硬貨から順に使用
//   for (let i = 0; i < coins.length; i++) {
//     const coin = coins[i];
//     const numCoins = Math.floor(remainingAmount / coin);

//     totalCoins += numCoins;
//     remainingAmount %= coin;

//     // すべての金額を支払えたらループを抜ける
//     if (remainingAmount === 0) break;
//   }

//   // 支払いが完了していない場合
//   if (remainingAmount > 0) return -1;

//   return totalCoins;
// }

// // 日本の硬貨システム
// const japanCoins = [500, 100, 50, 10, 5, 1];
// console.log(minCoins(japanCoins, 1234)); // 10枚（500×2 + 100×2 + 10×3 + 1×4）

// // アメリカの硬貨システム
// const usCoins = [25, 10, 5, 1]; // クォーター、ダイム、ニッケル、ペニー
// console.log(minCoins(usCoins, 99)); // 9枚（25×3 + 10×2 + 1×4）