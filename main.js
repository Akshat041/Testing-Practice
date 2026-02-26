function capitalize(str) {
  const initial = str[0].toUpperCase();
  const remainingStr = str.slice(1);

  return initial.concat(remainingStr);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

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

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
};
