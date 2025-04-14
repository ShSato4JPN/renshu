const num = [-2,1,-3,4,-1,2,1,3,4]

let max = {
  value: 0,
  pattern: []
}

console.log(num.slice(8, 9))

for (let i = 0; i < num.length; i++) {
  for (let j = i; j < num.length; j++) {
    const pattern = num.slice(i, j+1)

    const value = pattern.reduce((acc, current) => {
      return acc + current
    }, 0)

    if (max.value < value) {
      max = {
        value,
        pattern
      }
    }
  }
}

console.log(max)
