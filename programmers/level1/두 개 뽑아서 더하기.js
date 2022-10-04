// 내 답:
function solution(numbers) {
    let temp = [];
    numbers.forEach((el, ind) => {
        for (let i = ind + 1; i < numbers.length; i++) {
            temp.push(el + numbers[i]);
        }
    });
    temp = temp.sort((a, b) => a - b);
    return temp.filter((el, index) => el != temp[index - 1]);
}

// 좋은 답:
function solution2(numbers) {
    const temp = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j]);
        }
    }

    const answer = [...new Set(temp)];
    // new Set(중복제거되길 원하는 배열) 을 쓰면 중복이 제거된 배열이 나온다

    return answer.sort((a, b) => a - b);
}
console.log(solution2([2, 1, 3, 4, 1]));
