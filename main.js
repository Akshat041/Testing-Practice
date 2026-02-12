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
  // const alphabet = [a,b,c, d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,z];
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

  const cipherText = txtArr
    .map((char) => {
      return res + alphabet[(alphabet.indexOf(char) + key) % 26];
    })
    .join("");

  return cipherText;
}

// console.log(caesarCipher("xyz", 3));

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
};
