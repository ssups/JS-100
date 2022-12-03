// 내 답:
function solution(arr) {
  return (answer = arr.reduce((acc, cur) => {
    if (acc[acc.length - 1] != cur) acc.push(cur);
    return acc;
  }, []));
}
console.log(solution([1, 1, 2, 3]));

// 좋은 답:
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

const array = [1, 2, 4, 5, 6, 2, 3];
let m = new Map();
for (let n of array) m.set(n, (m.get(n) || 0) + 1);
console.log(m);
m.forEach((val, key, map) => console.log(val, key, map));
console.log([...m]);
