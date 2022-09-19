const arr = [1, 2, 3, 4];

// 내 답:
function solution(arr) {
    let count = 0;
    let sum = 0;
    arr.forEach(num => {
        sum += num;
        count++;
    });
    var answer = sum / count;
    return answer;
}
console.log(solution(arr));

// reduce 사용한답:
function solution2(arr) {
    const sum = arr.reduce((pre, cur) => {
        return pre + cur;
    }, 0);
    return (answer = sum / arr.length);
}
console.log(solution2(arr));
