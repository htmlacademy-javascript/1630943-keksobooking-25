// источники https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random и https://learn.javascript.ru/number
//функция с плавающей точкой
function getRandomArbitrary(min, max, degree) {
  if (min >= max || min < 0) {
    alert ('Минимальное значение не может быть меньше нуля или быть больше или равным максимальному');
  }
  Math.round(degree);
  return (Math.random() * (max - min) + min).toFixed(degree);
}
//Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomIntInclusive(min, max) {
  if (min >= max || min < 0) {
    alert ('Минимальное значение не может быть меньше нуля или быть больше или равным максимальному');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
