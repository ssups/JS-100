// 내답:
// 1. 문자열로(느림)
function solution(n) {
    var answer = 0;
    answer = (n + "")
        .split("")
        .sort((first, last) => last - first)
        .join("");

    // return parseInt(answer);
    return +answer; // 이런식으로 적어도 숫자열로 바뀜
}
console.log(solution(118372));

// 2.(숫자열로 (재귀함수방식))
function make(num, arr = []) {
    if (num <= 0) return arr;
    arr.push(num % 10);
    num = Math.floor(num / 10);
    make(num, arr);
    return arr;
}
function solution2(n) {
    return make(n)
        .sort((first, last) => last - first)
        .join("");
}
console.log(solution2(118372));

// 좋은답(숫자열로 반복문)
function solution3(n) {
    const arr = [];
    while (n > 0.1) {
        arr.push(n % 10);
        n = Math.floor(n / 10);
    }
    return arr.sort((first, last) => last - first).join("") * 1;
    // *1 해주면 숫자열로 바뀜
}
console.log(solution3(118372));
