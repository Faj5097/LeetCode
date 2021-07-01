/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  return "http://tinyurl.com/" + btoa(longUrl);
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  let s = "http://tinyurl.com/";
  return atoa(shortUrl.slice(s.length));
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
