// 내답
// 1. 재귀함수써서(재귀함수로하니깐 재생횟수 9999 이상 넘어가면 콜스택 exceed 오류 뜸)

const arr = [];
function solution(x, n, count = 0, originX) {
    arr.push(x);
    if (count === 0) originX = x;
    x += originX;
    count++;
    if (count >= n) return arr;
    solution(x, n, count, originX);
    return arr;
}
console.log(solution(23, 5));

// 2. 반복문으로
function solution2(x, n) {
    let arr = [];
    const incAmount = x;
    for (let i = 0; i < n; i++) {
        arr.push(x);
        x += incAmount;
    }
    return arr;
}
console.log(solution2(23, 5));

// 좋은답:
function solution3(x, n) {
    return Array(n)
        .fill(x)
        .map((el, index) => el * (index + 1));
}
console.log(solution3(23, 5));
