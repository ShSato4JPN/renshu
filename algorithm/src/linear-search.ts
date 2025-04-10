export const linearSearch = (target: number, data: number[]) => {
  for (let i = 0; i < data.length; i++) {
    if (target === data[i]) {
      return data[i];
    }
  }

  return -1;
};
