const checkStringLength = (string, length) => string.length <= length;

checkStringLength('string', 10);

const isEscapeKey = (evt) => evt.key === 'Escape';

const isArrayUnique = (elements) => {
  const result = [];
  elements.forEach((element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });
  return result.length === elements.length;
};

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export {getRandomPositiveInteger, isEscapeKey, isArrayUnique};
