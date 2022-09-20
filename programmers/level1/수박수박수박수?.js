function solution(n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += i % 2 === 0 ? "수" : "박";
    }
    return result;
}
console.log(solution(3));

const waterMelon = n => {
    return "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
};

console.log("n이 3인 경우: " + waterMelon(3));
console.log("n이 4인 경우: " + waterMelon(4));
