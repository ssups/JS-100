// 내답:
function solution(num) {
    let count = 0;
    while (num != 1) {
        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
        count++;
        if (count > 500) {
            count = -1;
            break;
        }
    }
    return count;
}
console.log(solution(8));
console.log(solution(626331));

// 내답에서 개선점:
function solution2(num) {
    let count = 0;
    while (num != 1 && count != 500) {
        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
        count++;
    }
    return num === 1 ? count : -1;
}
console.log(solution2(8));
console.log(solution2(626331));
