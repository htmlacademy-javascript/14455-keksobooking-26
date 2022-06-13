// module2-task1 – Вспомогательные функции

/*
Функция 1: возвращает случайное целое число из переданного диапазона включительно
– диапазон может быть только положительный, включая ноль
– "реакция функции" на передачу значение «до» меньшее, чем значение «от», или равное ему
– Функция может не гарантировать верный результат, если в переданном диапазоне нет ни одного подходящего числа
*/

const getRandomNumber = (minFirstNumber, maxSecondNumber) => {
  if (minFirstNumber >= 0 && maxSecondNumber >= 0 && minFirstNumber < maxSecondNumber && minFirstNumber !== maxSecondNumber) {
    minFirstNumber = Math.round(minFirstNumber);
    maxSecondNumber =  Math.round(maxSecondNumber);
    return Math.random() * (maxSecondNumber - minFirstNumber) + minFirstNumber;
  }
  throw new Error('Случайное целое число не может быть найдено, так как нарушено одно из условий');
};

getRandomNumber(1, 10);

// Старое решение

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInteger(minNumber, maxNumber) {
  if (minNumber >= 0 && maxNumber >= 0) {
    minNumber = Math.ceil(minNumber);
    maxNumber = Math.floor(maxNumber);
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber; //Максимум и минимум включаются
  } else {
    throw new Error('Неправильный диапазон');
  }
}

getRandomInteger(22, 33);

/*
Функция 2: возвращает  случайное число с плавающей точкой из переданного диапазона включительно
– диапазон может быть только положительный, включая ноль
– "реакция функции" на передачу значение «до» меньшее, чем значение «от», или равное ему
– Функция может не гарантировать верный результат, если в переданном диапазоне нет ни одного подходящего числа
*/

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomIntegerNumber2 = (firstRangeNumber, lastRangeNumber, floatNumber) => {
  if (firstRangeNumber >= 0 && lastRangeNumber >= 0 && floatNumber >= 0) {
    return (Math.random() * (firstRangeNumber - lastRangeNumber) + lastRangeNumber).toFixed(floatNumber);
  }
  throw new Error('Что-то с плавающей запятой у вас не так..., перепроверьте!');
};

getRandomIntegerNumber2(12,66,2);
