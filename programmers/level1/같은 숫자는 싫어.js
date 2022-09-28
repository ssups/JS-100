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
