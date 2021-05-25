/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  let ret = "";
  for (let i = 0; i < s.length; i++) {
    let ascii = s.charCodeAt(i);

    if (ascii >= 65 && ascii <= 90) {
      ret += String.fromCharCode(ascii + 32);
    } else {
      ret += s.charAt(i);
    }
  }

  return ret;
};

console.log(toLowerCase("HaHHllodsfsdf"));
