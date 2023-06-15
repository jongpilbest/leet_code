/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
 var stack_ar = [];

 const gogo = function () {
  var go_String = [];
  while (true) {
   var hey = stack_ar.pop();
   if (hey == '[') {
    break;
   }
   else {
    go_String.unshift(hey);
    //여기서 더하는게 아니라 앞으로 간다고 생각하는게...         

   }
  }

  let n = ''
  while (Number.isInteger(stack_ar[stack_ar.length - 1] * 1)) {
   const number = stack_ar.pop()
   n = number + n
  }


  stack_ar.push(go_String.join('').repeat(n));


 }

 for (var i = 0; i < s.length; i++) {
  if (s[i] == ']') {
   gogo()
  }
  else {
   stack_ar.push(s[i]);

  }


 }

 return stack_ar.join('');

};

decodeString("100[leetcode]")