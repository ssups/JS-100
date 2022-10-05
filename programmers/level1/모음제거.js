// 내 답:
function solution(my_string) {
    const temp = ["a", "e", "i", "o", "u"];
    return my_string
        .split("")
        .map(el => {
            if (!temp.includes(el)) return el;
        })
        .join("");
}

// 좋은 답:
function solution(my_string) {
    return Array.from(my_string)
        .filter(t => !["a", "e", "i", "o", "u"].includes(t))
        .join("");
}
