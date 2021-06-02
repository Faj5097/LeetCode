/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  var duplicates = new Map();

  paths.forEach((directory) => {
    var dirSplit = directory.split(" ");

    var dir = dirSplit[0];

    for (let i = 1; i < dirSplit.length; i++) {
      var fileName = dirSplit[i].slice(0, dirSplit[i].indexOf("("));
      var fileContent = dirSplit[i].slice(
        dirSplit[i].indexOf("(") + 1,
        dirSplit[i].indexOf(")")
      );

      //   console.log(dir);
      //   console.log(fileName);
      //   console.log(fileContent);

      var set;
      if (typeof duplicates.get(fileContent) !== "undefined") {
        set = duplicates.get(fileContent);
      } else {
        set = new Set();
      }
      set.add("" + dir + "/" + fileName);

      duplicates.set(fileContent, set);
    }
  });

  var arrRes = [];
  for (let item of duplicates.values()) {
    var arr = Array.from(item.values());
    if (arr.length > 1) {
      arrRes.push(arr);
    }
  }
  return arrRes;
};

console.log(
  findDuplicate([
    "root/a 1.txt(abcd) 2.txt(efgh)",
    "root/c 3.txt(abcd)",
    "root/c/d 4.txt(efgh)",
    "root 4.txt(efgh)"
  ])
);
