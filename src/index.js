module.exports = function check(str, bracketsConfig) {
  const getBracket = (char) => {
    const index = bracketsConfig.findIndex((x) => x.includes(char));
    const innerArray = bracketsConfig[index];
    return [
      index,
      innerArray.findIndex((x) => x === char),
      innerArray[0] === innerArray[1],
    ];
  };
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const [index, type, isSame] = getBracket(str[i]);
    if (type === 0 && (!isSame || stack[stack.length - 1] !== index)) {
      stack.push(index);
    } else if (type === 1 || isSame) {
      if (stack[stack.length - 1] === index) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
