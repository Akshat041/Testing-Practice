// 1. capitalize function that takes a string and returns it with the first character capitalized
function capitalize(str) {
  const initial = str[0].toUpperCase();
  const remainingStr = str.slice(1);

  return initial.concat(remainingStr);
}

// 2. A reverseString function that takes a string and returns it reversed.
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 3.  calculator object that contains functions for the basic operations.
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  div: function (a, b) {
    return a / b;
  },
  mul: function (a, b) {
    return a * b;
  },
};

// 4. A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.
function caesarCipher(text, key) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const txtArr = [...text];
  const res = "";
  let flag = 0;

  const cipherText = txtArr
    .map((char) => {
      if (
        char === "." ||
        char === "," ||
        char === " " ||
        char === "?" ||
        char === "!" ||
        char === ":" ||
        char === ";" ||
        char === "'" ||
        char === "-" ||
        char === "_" ||
        char === "(" ||
        char === ")"
      ) {
        return res + char;
      }
      if (char === char.toUpperCase()) {
        flag = 1;
        char = char.toLowerCase();
      } else {
        flag = 0;
      }

      return flag == 1
        ? res + alphabet[(alphabet.indexOf(char) + key) % 26].toUpperCase()
        : res + alphabet[(alphabet.indexOf(char) + key) % 26].toLowerCase();
    })
    .join("");

  return cipherText;
}

// 5. An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length
function analyzeArray(arr) {
  let average, min, max, length;
  let sum = 0;

  length = arr.length;

  for (let i = 0; i < length; i++) {
    sum += arr[i];
  }
  average = sum / length;

  min = findMin(arr);

  max = findMax(arr);

  return { average, min, max, length };
}

function findMin(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}
function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
