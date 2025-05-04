/*
Celsius to Kelvin: K = C + 273.15
Kelvin to Celcius: C = K - 273.15
Fahrenheit to Celcius: C = (F-32) (5/9)
Celsius to Fahrenheit: F = C(9/5) + 32
Fahrenheit to Kelvin: K = (F-32) (5/9) + 273.15
Kelvin to Fahrenheit: F = (K-273.15) (9/5) + 32
*/

// 1
const CToK = (degree) => {
  return degree + 273.15;
};

// 2
const KToC = (degree) => {
  return degree - 273.15;
};

// 3
const FToC = (degree) => {
  return ((degree - 32) * 5) / 9;
};

// 4
const CToF = (degree) => {
  return (degree * 9) / 5 + 32;
};

// 5
const FToK = (degree) => {
  return ((degree - 32) * 5) / 9 + 273.15;
};

// 6
const KToF = (degree) => {
  return ((degree - 273.15) * 9) / 5 + 32;
};

const convert = (num, degrees) => {
  switch (num) {
    case 1:
      return `${degrees} Celsius converted to Kelvin is ${CToK(
        degrees
      )} degrees`;
      break;
    case 2:
      return `${degrees} Kelvin converted to Celsius is ${KToC(
        degrees
      )} degrees`;
      break;
    case 3:
      return `${degrees} Fahrenheit converted Celsius is ${FToC(
        degrees
      )} degrees`;
      break;
    case 4:
      return `${degrees} Celsius converted to Fahrenheit is ${CToF(
        degrees
      )} degrees`;
      break;
    case 5:
      return `${degrees} Fahrenheit converted to Kelvin is ${FToK(
        degrees
      )} degrees`;
      break;
    case 6:
      return `${degrees} Kelvin converted to Fahrenheit is ${KToF(
        degrees
      )} degrees`;
      break;
  }
};
