export const binarySearch = (target: number, data: number[]) => {
  let start = 0,
    end = data.length - 1;

  let count = 0;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    const value = data[middle];

    console.log(`times: ${++count} data[${middle}] = ${value}`);
    console.table({ value, target, start, middle, end });

    if (value == target) {
      console.log(`index: ${middle} value: ${value}`);
      return value;
    } else if (target < value) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  console.log("not found");

  return -1;
};
