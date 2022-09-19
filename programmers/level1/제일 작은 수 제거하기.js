// 내 답:
function solution(arr) {
    const temp = [...arr];
    arr.splice(arr.indexOf(temp.sort((a, b) => a - b)[0]), 1);
    // arr =arr.filter(el=>el != temp.sort((a,b)=>a-b)[0])
    return (answer = arr.length != 0 ? arr : [-1]);
}
console.log(solution([4, 3, 5, 6, 1]));

// 좋은 답:
function solution2(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    if (arr.length < 1) return [-1];
    return arr;
}
console.log(solution2([4, 3, 5, 6, 1]));

arr = [2, 43, 4, 5, 6];
arr2 = arr.forEach(el => el);
console.log(arr2);
const newArr = arr.map(el => el);
console.log(newArr);
