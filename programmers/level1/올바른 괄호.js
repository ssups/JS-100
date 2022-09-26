function solution(s) {
    let count = 0;
    // let answer;
    const arr = s.split("");
    for (const el of arr) {
        el === "(" ? count++ : count--;
        if (count < 0) break;
        console.log(count);
    }
    // const answer = count === 0 ? true : false;
    // if (count === 0) answer = true;
    // else answer = false;
    return (answer = count === 0 ? true : false);
}
console.log(solution("()()"));
// console.log(solution(")()("));
