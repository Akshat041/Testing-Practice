function capitalize(str) {
  const initial = str[0].toUpperCase();
  const remainingStr = str.slice(1);

  return initial.concat(remainingStr);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("developer");
module.exports = {
  capitalize,
  reverseString,
};
