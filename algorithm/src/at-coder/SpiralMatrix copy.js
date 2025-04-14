const _matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

function loopMatrix(saveData, matrix) {
  // 左から右
  for (let i = 0; i < matrix[0].length; i++){
    saveData.push(matrix[0][i])
  }

  // 上から下
  if (2 < matrix.length) {
    for (let i = 1; i <= matrix.length - 2; i++) {
      saveData.push(matrix[i].splice(-1)[0])
    }
  }

  //右から左
  if (1 < matrix.length) {
    for (let i = matrix.slice(-1)[0].length - 1; 0 <= i; i--){
      saveData.push(matrix.slice(-1)[0][i])
    }
  }

  // 下から上
  if (2 < matrix.length) {
    for (let i = matrix.length - 2; 1 <= i; i--) {
      saveData.push(matrix[i].splice(0, 1)[0])
    }
  }

  // 上下の行を削除する
  matrix.splice(0, 1)
  matrix.splice(-1)

  if (matrix.length !== 0) {
    loopMatrix(saveData, matrix)
  }
}

const saveData = []
loopMatrix(saveData, _matrix);
console.log(saveData)