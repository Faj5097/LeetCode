/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  let ans = [];

  products = products
    .filter((product) => product.startsWith(searchWord[0]))
    .sort();
  ans.push(products.slice(0, 3));

  for (let i = 1; i < searchWord.length; i++) {
    products = products
      .filter((product) => product.startsWith(searchWord.slice(0, i + 1)))
      .sort();
    ans.push(products.slice(0, 3));
  }

  return ans;
};

console.log(
  suggestedProducts(
    ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
    "mouse"
  )
);
console.log(suggestedProducts(["havana"], "havana"));
console.log(
  suggestedProducts(["bags", "baggage", "banner", "box", "cloths"], "bags")
);
console.log(suggestedProducts(["havana"], "tatiana"));
