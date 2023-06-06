var spiralOrder = function (matrix) {


 const arr2 = Array.from(Array(matrix.length), () => Array(matrix[0].length).fill(0));

 var xx = [+1, 0, -1, 0];
 var yy = [0, +1, 0, -1];
 var push_ar = [];


 const inner = function (y, x, gogo) {

  if (x < 0 || y < 0 || x >= matrix[0].length ||
   y >= matrix.length) {
   return 1;
  }
  if (arr2[y][x] == 1) {
   return 2;
  }

  push_ar.push(matrix[y][x])

  arr2[y][x] = 1;

  for (var i = 0; i < 2; i++) {
   var yo = y + yy[gogo];
   var xo = x + xx[gogo];
   console.log(gogo)
   var chek = inner(yo, xo, gogo);

   if (chek) {
    yo -= yy[gogo];
    xo -= xx[gogo];
    gogo += 1;
   }
   if (chek == 2 && gogo == 4) {

    gogo = 0;

   }

  }



 }

 inner(0, 0, 0);
 return (push_ar)

};
