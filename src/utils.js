export const integerToDecimal = (num) => {
  if (num < 10) {
    return `0.0${num}`;
  }
  if (num === 100) {
    return "1";
  }
  return `0.${num}`;
};
