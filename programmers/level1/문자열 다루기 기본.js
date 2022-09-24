function test(s) {
    let result = 0;
    s.split("").forEach(el => {
        result += el * 1;
    });
    console.log(result);
    return result ? true : false;
}
function solution(s) {
    return s.length === 4 || s.length === 6 ? test(s) : false;
    // return (s.length >= 4 && s.length <= 6) ? test() : false
}
console.log(solution("a234"));
