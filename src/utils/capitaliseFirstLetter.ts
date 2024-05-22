export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const capitalizeFirstLetterString = (str: string) => {
  if (str === '') return '';
  const words = str.split(' ');
  return words
    .map((word) => {
      return word[0]!.toUpperCase() + word.substring(1);
    })
    .join(' ');
};
