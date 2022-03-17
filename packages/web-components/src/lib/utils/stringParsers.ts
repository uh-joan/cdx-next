export const stringToNumberArrayConvertor = (str: string): number[] => {
  const array = JSON.parse(str);
  return array.map(Number);
};
