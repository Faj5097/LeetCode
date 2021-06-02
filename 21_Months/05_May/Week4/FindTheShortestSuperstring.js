/**
 * @param {string[]} words
 * @return {string}
 */

// function removeIncludes(words) {
//   for (let i = 0; i < words.length; i++) {
//     for (let j = 0; j < words.length; j++) {
//       if (i !== j) {
//         if (words[i].includes(words[j])) {
//           words.splice(j, 1);
//         }
//       }
//     }
//   }
// }

// function getShortestSubstring(words) {
//   //Remove all words that are included in another one
//   removeIncludes(words);

//   //return String initially with all left values
//   let shortestStr = words.join("");

//   //FindShortestString with different Beginning
//   for (let i = 0; i < words.length; i++) {
//     let beginStr = words[i];
//     let chain = [beginStr, ...words.slice(0, i), ...words.slice(i + 1)];

//     while (chain[0].length < shortestStr.length && chain.length > 1) {
//       chain = findBiggestMatch(chain);
//     }

//     if (chain[0].length < shortestStr) {
//       shortestStr = chain[0];
//     }
//   }
// }

// function findBiggestMatch(words) {
//   let newSubStr = words[0];
//   let lengthMatch = 0;
//   let deleteIndex = -1;

//   for (let i = 1; i < words.length; i++) {
//     //replace best Substring
//     if (words[i].length > lengthMatch) {
//       for (let x = 0; x < words[i].length; x++) {
//         //ending String
//         if (x > lengthMatch) {
//           if (words[0].endsWith(words[i].substring(0, x))) {
//             newSubStr = words[0] + words[i].substring(x);
//             lengthMatch = x;
//             deleteIndex = i;
//           }
//         }
//       }
//     } else {
//       break;
//     }
//   }

//   if (deleteIndex !== -1) {
//     words[0] = newSubStr;
//     words.splice(deleteIndex, 1);
//   }

//   return words;
// }

var shortestSuperstring = function (words) {
  let shortestStr = words.join("");

  function helper(arr) {}

  return shortestStr;
};

// console.log(shortestSuperstring(["alex", "loves", "ove", "leetcode"]));
// console.log(shortestSuperstring(["catg", "ctaagt", "gcta", "ttca", "atgcatc"]));
console.log(shortestSuperstring(["abcdef", "efde", "defab"]));

//"efdefabcdef"
