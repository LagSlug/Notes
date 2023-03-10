var replacements = [
  ['&', '&amp;'],
  ['<', '&lt;'],
  ['>', '&gt;'],
  ['"', '&quot;'],
  ["'", '&#39;'],
  ['{', '&#123;'],
  ['}', '&#125;'],
  ['[', '&#91;'],
  [']', '&#93;'],
  ['(', '&#40;'],
  [')', '&#41;'],
  ['$', '&#36;'],
  ['%', '&#37;'],
  ['@', '&#64;']
];

module.exports = function escapeHtml(text) {

  
  var result = '';
  for (var i = 0; i < text.length; i++) {
    var char = text.charAt(i);
    var replacement = null;
    for (var j = 0; j < replacements.length; j++) {
      if (char === replacements[j][0]) {
        replacement = replacements[j][1];
        break;
      }
    }
    result += replacement !== null ? replacement : char;
  }
  return result;
}
