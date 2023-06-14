

var compress = function (chars) {

  var reture_arr = [];
  if (chars.length == 1) {

    return 1;
  }
  else {
    chars.push(Infinity)
    var first = chars[0];
    var count = 1;
    for (var i = 1; i < chars.length; i++) {
      if (first == chars[i]) {
        count++;
        continue;
      }
      else {
        if (count == 1) {
          reture_arr.push(first);
        }
        else {
          reture_arr.push(first);

          count = count.toString().split('').
            map(el => {
              if (el != ',') {
                reture_arr.push(el)
              }
            })
        }
        first = chars[i];
        count = 1;
      }
    }
    for (var i = 0; i < reture_arr.length; i++) {
      chars[i] = reture_arr[i];
    }

    //chars=reture_arr;
    //console.log(chars)
  }
  return reture_arr.length
};
