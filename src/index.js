module.exports = function check(str, bracketsConfig) {
  // your solution
  let strArray = str.split("");
  let length = bracketsConfig.length;
  let openBrackets = [],
      closeBrackets = [];
  let i = 0, j = 0, count = 0;

  for (i = 0; i < length; i++) {
    openBrackets[i] = bracketsConfig[i][0];
    closeBrackets[i] = bracketsConfig[i][1];
  }
  for (i = 0; i < strArray.length; i++) {  
    if (strArray[0] === openBrackets[i]) {
      for (i = 0; i < strArray.length; i++) {
        for (j = 0; j < openBrackets.length; j++){
          if(strArray[i] === openBrackets[j]) {
            count++;
          }
          if(strArray[i] === closeBrackets[j]) {
            count--;
          }
          if (count < 0)
            return false;
        }
      } 
      if (count === 0) {
        return true;       
      } else
        return false;
    } else if (strArray[0] === closeBrackets[i])
        return false; 
  }
}
