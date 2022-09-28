// 내 답:
function solution(s) {
    let answer = "";
    let temp = "";
    let test = 0;
    const obj = {
        zero: "0",
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9",
    };
    for (let el of s) {
        test + el * 1 === 0
            ? (answer += el)
            : test + el * 1
            ? (answer += el)
            : (temp += el);
        if (obj[temp]) {
            answer += obj[temp];
            temp = "";
        }
    }
    return answer * 1;
}

// 좋은 답:
function solution(s) {
    let numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    var answer = s;

    for (let i = 0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
