const toOneDecimal = function(number) {
  return Math.round(number * 10) / 10;
}
const convertToCelsius = function(fah) {
  return toOneDecimal((fah - 32) * (5 / 9));
};

const convertToFahrenheit = function(cel) {
  return toOneDecimal((cel * ( 9 / 5)) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
