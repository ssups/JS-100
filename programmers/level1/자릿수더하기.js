// 예를들어서 123 을 넣으면 1+2+3 해서 6이 나오는 형식

// 내 풀이
function solution(n) {
    var answer = 0;
    n.toString()
        .split("")
        .forEach(el => (answer += Number(el)));
    return answer;
}
// 다른사람 풀이
function solution(n) {
    return (n + "") // 숫자열 + 문자열은 문자열로 반환되기 때문에 숫자랑 빈문자랑 합해주면 문자화시켜줌
        .split("")
        .reduce((acc, curr) => acc + parseInt(curr), 0); //초기값을 정수로 넣어서 문자열+숫자 형태로 되는거 방지
}
