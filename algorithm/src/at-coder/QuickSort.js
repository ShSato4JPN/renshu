const unsorted = [8,2,7,6,9,1,4,3,5];

let count = 0

function quickSort(arr, start, end) {
  let left = start, right = end;

  const pivot = arr[ Math.floor((left + right) / 2)]

  while(true) {
    while(arr[left] < pivot) {
      left++;
    }

    while(pivot < arr[right]) {
      right--;
    }

    if (right <= left) {
      break;
    }

    const temp = arr[left]
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  // 衝突した前の値と比較
  if (start < left - 1) quickSort(arr, start, left - 1)
  if (right + 1  < end) quickSort(arr, right + 1, end)
}

quickSort(unsorted, 0, unsorted.length - 1)

console.log(unsorted)