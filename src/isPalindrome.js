//for pull request review
export default function isPalindrome(string) {

  if (typeof string !== 'string') {
    return 'Not a string'
  }
  var word = string.replace(/\W+/g, "").toLowerCase();
  var arrStr = word.split('');
  var revStr = arrStr.reverse();
  var joinRevStr = revStr.join('')
  return joinRevStr == word;
}
