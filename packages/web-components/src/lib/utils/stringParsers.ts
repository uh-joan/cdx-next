export const stringToBooleanConvertor = (str: string): boolean => {
  return str === 'true';
};

export const stringToIntConvertor = (str: string): number => {
  return parseInt(str);
};

export const stringToNumberArrayConvertor = (str: string): number[] => {
  const array = JSON.parse(str);
  return array.map(Number);
};
