module.exports = function check(str, bracketsConfig) {
  // your solution
  const strArray = str.split("");
  const length = bracketsConfig.length;
  const openBrackets = [],
      closeBrackets = [];
  let i = 0, j = 0, count = 0;
  let stack = [];

  for (i = 0; i < length; i++) {
    openBrackets[i] = bracketsConfig[i][0];
    closeBrackets[i] = bracketsConfig[i][1];
  }
  for (i = 0; i < strArray.length; i++) {  
    //if (strArray[0] === openBrackets[i]) {
      for (i = 0; i < strArray.length; i++) {
        for (j = 0; j < openBrackets.length; j++){
          if (openBrackets[j] === closeBrackets[j] && strArray[i] == closeBrackets[j]) {
            if (strArray[i] === closeBrackets[stack[stack.length - 1]]) {
                stack.pop();
                count--;
            } 
            else {
              stack.push(j);
              count++;
            }
          } else if (strArray[i] === openBrackets[j]) {
            stack.push(j);
            count++;
          } else if (strArray[i] === closeBrackets[j]) {
            if (j == stack.pop()) {
              count--;
             } else return false;
          }
        }
        if (count < 0)
            return false;
      }
      if (count === 0)
        return true;
        else
          return false;
  }
}
