/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  let ans = false;

  function helper(s1, s2, s3) {
    // console.log("NEW NEW NEW");
    // console.log(s1);
    // console.log(s2);
    // console.log(s3);

    let done = false;
    if (s1.length + s2.length === s3.length) {
      while (!ans && !done) {
        if (s1 + s2 === s3 || s2 + s1 === s3) {
          ans = true;
        } else {
          //   console.log("s1 Len: " + s1.length);
          //   console.log("s2 Len: " + s2.length);
          if (!done && s1.length > 0) {
            if (s3.startsWith(s1[0])) {
              helper(
                s1.length > 1 ? s1.substring(1) : "",
                s2,
                s3.length > 1 ? s3.substring(1) : ""
              );
            }
          } else {
            if (s2 === s3) {
              ans = true;
            } else {
              done = true;
            }
          }

          if (!done && s2.length > 0) {
            if (s3.startsWith(s2[0])) {
              helper(
                s1,
                s2.length > 1 ? s2.substring(1) : "",
                s3.length > 1 ? s3.substring(1) : ""
              );
            }
          } else {
            if (s1 === s3) {
              ans = true;
            } else {
              done = true;
            }
          }

          if (s1 === "" && s2 === "" && s3 === "") {
            ans = true;
          } else {
            done = true;
          }
        }
      }
    }
  }

  helper(s1, s2, s3);
  return ans;
};

// console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));
// console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc"));
// console.log(isInterleave("", "", "a"));
// console.log(isInterleave("", "", ""));
console.log(
  isInterleave(
    "bbbbbabbbbabaababaaaabbababbaaabbabbaaabaaaaababbbababbbbbabbbbababbabaabababbbaabababababbbaaababaa",
    "babaaaabbababbbabbbbaabaabbaabbbbaabaaabaababaaaabaaabbaaabaaaabaabaabbbbbbbbbbbabaaabbababbabbabaab",
    "babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab"
  )
);
