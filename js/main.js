const checkStringLength = (string, length) => string.length <= length;

const getRandomNumber = (min, max) => {
  if (min >= 0 && max >= 0 && min < max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  if (min < 0 || max < 0) {
    return 'минимальное значение должно быть больше нуля';
  }

  return min;
};

console.log(checkStringLength('', 140));
console.log(getRandomNumber(1, 5));
console.log(getRandomNumber(-1, 5));
console.log(getRandomNumber(1, -5));
console.log(getRandomNumber(10, 5));
