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

module.exports = {
  capitalize,
  reverseString,
  calculator,
};
