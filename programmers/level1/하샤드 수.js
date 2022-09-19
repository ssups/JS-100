// 내답:
function solution(x) {
    const arr = [];
    const originX = x;
    while (x > 0) {
        arr.push(x % 10);
        x = Math.floor(x / 10);
    }
    return originX % arr.reduce((acc, num) => acc + num, 0) === 0;
}
console.log(solution(14));
console.log(solution(18));

// 좋은답:
function solution2(x) {
    let sum = 0;
    const originX = x;
    while (x > 0) {
        sum += x % 10;
        x = Math.floor(x / 10);
    }
    return originX % sum === 0;
}
console.log(solution2(14));
console.log(solution2(18));
