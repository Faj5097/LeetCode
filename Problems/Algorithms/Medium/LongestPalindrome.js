/**
 * @param {string} s
 * @return {string}
 */
function reverseString(str) {
  if (str.length > 0) {
    var splitString = [...str];
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  }
}

var longestPalindrome = function (s) {
  let len = s.length;
  let palindrom = len;
  let start = 0;

  let ans = "";

  while (palindrom > 0 && ans.length === 0) {
    //   console.log("-------- " + palindrom);
    if (start + palindrom <= len) {
      //   console.log(s.slice(start, start + palindrom));
      if (palindrom % 2 === 0) {
        //   console.log(s.slice(start, start + palindrom / 2));
        //   console.log(reverseString(s.slice(start + palindrom / 2, start + palindrom)));
        if (
          s.slice(start, start + palindrom / 2) ==
          reverseString(s.slice(start + palindrom / 2, start + palindrom))
        )
          ans = s.slice(start, start + palindrom);
        start++;
      } else {
        //   console.log(s.slice(start, start + Math.floor(palindrom / 2) ));
        //   console.log(
        //     reverseString(s.slice(start + Math.floor(palindrom / 2) + 1, start + palindrom))
        //   );
        if (
          s.slice(start, start + Math.floor(palindrom / 2)) ==
          reverseString(
            s.slice(start + Math.floor(palindrom / 2) + 1, start + palindrom)
          )
        )
          ans = s.slice(start, start + palindrom);
        start++;
      }
    } else {
      palindrom--;
      start = 0;
    }
  }

  return ans;
};
