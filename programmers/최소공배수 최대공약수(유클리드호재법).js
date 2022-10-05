// 내 답:
function func(num) {
    let result = [];
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) result.push(i);
    }
    return result;
}
function solution(n, m) {
    const temp = Math.max(...func(n).filter(el => func(m).includes(el)));
    return [temp, temp * (n / temp) * (m / temp)];
}

// 좋은 답:
function gcdlcm(a, b) {
    var r;
    for (var ab = a * b; (r = a % b); a = b, b = r) {}
    return [b, ab / b];
}
