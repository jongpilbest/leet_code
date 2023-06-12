/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
 var count = 0
 //그냥 뭐.. 슬라이딩 윈도우 인데 
 for (var i = 0; i < k; i++) {

  if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
   count++;
  }
 }


 var mavx = count;
 var right = k;
 var left = 0;
 for (var ii = k; ii < s.length; ii++) {
  if (s[left] == 'a' || s[left] == 'e' || s[left] == 'i' || s[left] == 'o' || s[left] == 'u') {
   count--;
  }
  if (s[right] == 'a' || s[right] == 'e' || s[right] == 'i' || s[right] == 'o' || s[right] == 'u') {
   count++;
  }
  mavx = Math.max(mavx, count);
  left++;
  right++;

 }

 return mavx;

};
