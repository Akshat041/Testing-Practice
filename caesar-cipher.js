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

module.exports = caesarCipher;
