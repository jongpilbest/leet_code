var findAnagrams = function (s, p) {

 //in
 var obj = {};
 //메인이라고 생각하면된다.
 var first = {};
 var final_index = [];
 for (var i = 0; i < p.length; i++) {
  if (!obj[p[i]]) {
   obj[p[i]] = 1;

  }
  else if (obj[p[i]]) {
   obj[p[i]] += 1;
  }

  if (!first[s[i]]) {
   first[s[i]] = 1;

  }

  else if (first[s[i]]) {
   first[s[i]] += 1;
  }
 }
 //둘이 같은지 비교하는거 

 const is_ture = function (s1, s2) {
  var hey = Object.keys(s2);
  for (var i = 0; i < hey.length; i++) {
   if (s1[hey[i]] > 0) {
    if (s1[hey[i]] == s2[hey[i]]) {
     continue;
    }

   }

   return false;

  }
  return true;
 }
 if (is_ture(obj, first) == true) {
  final_index.push(0);
 }
 // 처음한게 같은경우..어쨋든 넣는다. 
 //이제부터 가는거임
 var left = 0;
 var right = p.length;

 for (var i = p.length; i < s.length; i++) {
  //삭제하는거 
  first[s[left]] -= 1;
  if (first[s[left]] == 0) {
   delete first[s[left]];
  }

  //추가하는거 
  // console.log(first,'삭제')
  if (!first[s[right]]) {
   first[s[right]] = 1
  }
  else if (first[s[right]]) {
   first[s[right]] += 1;
  }
  //변경된거 가보자고 
  if (is_ture(obj, first) == true) {
   final_index.push(left + 1);
  }
  right++;
  left++

 }
 return final_index

};

