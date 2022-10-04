// 내 답:
function solution(s) {
    s = s.split(" ").sort((a, b) => a - b);
    return `${s[0]} ${s[s.length - 1]}`;
}

// 좋은 답:
function solution(s) {
    const arr = s.split(" ");

    return Math.min(...arr) + " " + Math.max(...arr);
    // ...배열 => 배열의 요소들만 들어감
}
console.log("sdfwer".charAt(0));
"serf".substring();
const arr = [1, 2, 3, 4];
console.log(arr[-1]);
