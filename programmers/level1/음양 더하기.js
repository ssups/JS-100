// 내 답:
function solution(absolutes, signs) {
    signs = signs.map(el => (el ? "+" : "-"));
    var answer = absolutes
        .map((el, index) => (signs[index] + el) * 1)
        .reduce((sum, integer) => sum + integer, 0);
    return answer;
}

// 좋은 답:
function solution2(absolutes, signs) {
    return absolutes.reduce(
        (acc, val, i) => acc + val * (signs[i] ? 1 : -1),
        0
    );
}
