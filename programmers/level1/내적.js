// 내 답:
// 내적이란? [1,-1,3] 이랑 [2,-1,-2] 의 내적 = [2,1,-6]
// 내적의 합 구하기
function solution(a, b) {
  return (answer = a.map((a, index) => a * b[index]).reduce((acc, cur) => acc + cur, 0));
}

// 좋은답:
var solution = (a, b) => a.reduce((acc, cur, i) => acc + cur * b[i], 0);
