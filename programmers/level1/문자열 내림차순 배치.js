function solution(s) {
    return s
        .split("")
        .sort((first, last) => (first > last ? -1 : first < last ? 1 : 0))
        .join("");

    // 이거 sort 적을때 문자열 비교면 first-last > 0 이런식으로 비교하면 안됨
    // 무조건 first>last 이런식으로 비교해야함
}
console.log(solution("sdaBKzQ"));
console.log(solution("Zbcdefg"));

function solution2(s) {
    return s.split("").sort().reverse().join("");
}
console.log(solution2("sdaBKzQ"));
console.log(solution2("Zbcdefg"));
