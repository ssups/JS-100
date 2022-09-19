// 예를들어 123을 대입시키면 [3,2,1] 이런식으로 나오게 하면 된다.

// 내답:
function solution(n) {
    var answer = (n + "")
        .split("")
        .reverse()
        .map(el => parseInt(el));
    return answer;
}

// 다른사람 풀이:
function solution(n) {
    var arr = [];

    do {
        arr.push(n % 10);
        n = Math.floor(n / 10);
    } while (n > 0);
    // 배열에 1의자리수 넣어주고 숫자 한자리 내려주는 방식
    return arr;
}

console.log(solution(123));
