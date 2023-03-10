module.exports = function wrapSuffixNumbersWithTag(text = "", tag = "<sub>") {
  const tagName = tag.match(/<(\w+)(\s+[^>]*)?>/)[1];
  const endTag = `</${tagName}>`;
  return text.replace(/([a-zA-Z]+)(\d+)/g, `$1${tag}$2${endTag}`);
}