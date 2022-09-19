// 답 :
function solution(s) {
    s = s.split(" ").map(el => {
        el = el.split("");
        for (let i = 0; i < Math.ceil(el.length / 2); i++) {
            el[2 * i] = el[2 * i].toUpperCase();
            if (el[2 * i + 1]) el[2 * i + 1] = el[2 * i + 1].toLowerCase();
        }
        return (el = el.join(""));
    });
    return s.join(" ");
}
console.log(solution("try hello world"));

// 좋은 답1:
function toWeirdCase(s) {
    //함수를 완성해주세요
    return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
        return a[0].toUpperCase() + a[1].toLowerCase();
    });
}

// 좋은 답2:
function toWeirdCase(s) {
    return s
        .split(" ")
        .map(i =>
            i
                .split("")
                .map((j, key) => (key % 2 === 0 ? j.toUpperCase() : j))
                .join("")
        )
        .join(" ");
}

console.log("결과 : " + toWeirdCase("try hello world"));
