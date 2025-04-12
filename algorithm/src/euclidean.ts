export const euclidean = (value1: number, value2: number): number => {
  const reminder = value1 % value2;

  console.log({ value1, value2, reminder });

  if (reminder === 0) {
    return value2;
  } else {
    return euclidean(value2, reminder);
  }
};
