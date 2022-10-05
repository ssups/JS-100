// 내 답:
function solution(num_list, n) {
    const result = [];
    for (let i = 0; i < num_list.length / n; i++) {
        let temp = [];
        for (let k = 0; k < n; k++) {
            temp.push(num_list[n * i + k]);
        }
        result.push(temp);
    }
    return result;
}

// 좋은 답:
function solution(num_list, n) {
    var answer = [];

    while (num_list.length) {
        answer.push(num_list.splice(0, n));
    }

    return answer;
}
