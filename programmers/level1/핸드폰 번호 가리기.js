// 내 답:
function solution(phone_number) {
    const length = phone_number.length - 4;
    const temp = phone_number.slice(-4);
    const arr = [];
    for (let i = 0; i < length; i++) arr.push("*");
    return arr.join("") + temp;
}
console.log(solution("01023445124"));

// 좋은답:
function solution2(phone_number) {
    return (result =
        "*".repeat(phone_number.length - 4) + phone_number.slice(-4));
}
console.log(solution2("01023445124"));

function hide_numbers(s) {
    return s.replace(/\d(?=\d{4})/g, "*");
}
console.log(hide_numbers("01023445124"));
