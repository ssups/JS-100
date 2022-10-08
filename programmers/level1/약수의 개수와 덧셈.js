// 내 답:
function amount(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) count++;
  }
  return count;
}
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    amount(i) % 2 === 0 ? (answer += i) : (answer -= i);
  }
  return answer;
}

// 좋은 답:

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      // 제곱근이 정수면 약수의 갯수가 홀수임
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
