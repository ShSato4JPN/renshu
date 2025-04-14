/**
 * 無向グラフにおける2点間の最短経路をBFSで見つける
 * @param {Object} graph - 隣接リスト形式のグラフ {ノード: [隣接ノードのリスト]}
 * @param {string|number} start - 開始ノード
 * @param {string|number} end - 終了ノード
 * @return {Array} 最短経路。経路がない場合は空配列
 */
function shortestPath(graph, start, end) {
  // ここに実装してください
}

// テストケース：都市間の接続を表すグラフ
const cityGraph = {
  'Tokyo': ['Osaka', 'Sendai', 'Sapporo'],
  'Osaka': ['Tokyo', 'Fukuoka', 'Kyoto'],
  'Fukuoka': ['Osaka', 'Hiroshima'],
  'Sendai': ['Tokyo', 'Morioka'],
  'Sapporo': ['Tokyo', 'Asahikawa'],
  'Kyoto': ['Osaka'],
  'Hiroshima': ['Fukuoka'],
  'Morioka': ['Sendai'],
  'Asahikawa': ['Sapporo']
};

console.log(shortestPath(cityGraph, 'Tokyo', 'Fukuoka')); // ['Tokyo', 'Osaka', 'Fukuoka']
console.log(shortestPath(cityGraph, 'Sapporo', 'Hiroshima')); // 経路を出力