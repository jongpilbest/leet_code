/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {


 const xx = [+1, 0, -1, 0];
 const yy = [0, +1, 0, -1];
 var mmin = 0;
 var qq = [[entrance, 0]];
 // 갔던 값도 체크해야됨
 const arr2 = Array.from(Array(maze.length), () => Array(maze[0].length).fill(null));



 // 여기에  return 값 바로 출력
 //입구로 나갈수 없습니다.... 
 while (qq.length > 0) {
  var [gogo, cc] = qq.shift();
  const [y, x] = gogo;

  arr2[y][x] = 1;
  if (x == maze[0].length - 1 || x == 0 || y == 0 || y == maze.length - 1) {

   if (entrance.join('') != [y, x].join('')) {
    if (mmin == 0) {
     mmin = cc;
    }
    else {
     mmin = Math.min(mmin, cc);

    }
   }
  }
  for (var i = 0; i < 4; i++) {
   var x_x = x + xx[i];
   var y_y = y + yy[i];
   if (x_x < 0 || y_y < 0 || x_x >= maze[0].length || y_y >= maze.length || maze[y_y][x_x] == '+') {
    continue;
   }
   // 아닌 경우에는 
   if (maze[y_y][x_x] == '.' && arr2[y_y][x_x] != 1) {
    qq.push([[y_y, x_x], cc + 1]);
    arr2[y_y][x_x] = 1;

   }

  }

 }
 return mmin == 0 ? -1 : mmin
};
dfdfsf;


/*
1. 기본 bfs 문제. 
2.border 에 다가가면 > return 하는 방식으로 설계하였다.
3. 이때 entrance 와 exit 가 같다면 > count를 하지 않는 방식으로 설계 
4. 이미 왔던 경우는 pass > 1 로 판별하자 

https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/?envType=study-plan-v2&envId=leetcode-75


*/

