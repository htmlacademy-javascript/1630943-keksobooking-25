// источники https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random и https://learn.javascript.ru/number
function getRandomArbitrary(min, max, degree) {
  if (min >= max || min < 0) {
  alert ('Минимальное значение не может быть меньше нуля или быть больше или равным максимальному');
  }
  Math.round(degree);
  return (Math.random() * (max - min) + min).toFixed(degree);
}

getRandomArbitrary (1, 2, 5);
