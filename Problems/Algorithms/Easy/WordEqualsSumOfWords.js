/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  let firstNum = "",
    secondNum = "",
    targetNum = "";

  for (let i = 0; i < firstWord.length; i++) {
    firstNum += "" + firstWord.charCodeAt(i) - 97;
  }

  for (let i = 0; i < secondWord.length; i++) {
    secondNum += secondWord.charCodeAt(i) - 97;
  }

  for (let i = 0; i < targetWord.length; i++) {
    targetNum += targetWord.charCodeAt(i) - 97;
  }

  if (parseInt(firstNum) + parseInt(secondNum) === parseInt(targetNum))
    return true;
  else return false;
};

console.log(isSumEqual("acb", "cba", "cdb"));
