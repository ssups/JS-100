// 처리속도때문에 불통된거
// function solution(n) {
//     const arr = []
//     for(let i = 1; i<=n; i++){
//         const tempArr = []
//         for(let k = 1; k<=i; k++){
//             if(i%k == 0) tempArr.push(k)
//             // f(tempArr.length>2) return
//         }
//         console.log(tempArr)
//         if(tempArr.length===2)arr.push(i)

//     }
//     var answer = arr.length;
//     return answer;
// }

// function solution(n) {
//     const arr = [];
//     for (let i = 2; i <= n; i++) {
//         let result = true;
//         for (let k = 2; k < i; k++) {
//             if (i % k == 0) {
//                 return (result = false);
//             }
//         }
//         if (result) arr.push(i);
//     }
//     var answer = arr;
//     console.log(answer);
//     return answer;
// }
// // console.log(solution(1234));
// solution(10);

// function isPrime(n) {
//     let result = true;
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) return (result = false);
//     }
//     console.log(result);
//     return result;
// }
// const allPrime

// function solution(n) {
//     all = [];
//     for (let i = 2; i <= n; i++) {
//         if (isPrime(i)) all.push(i);
//     }
//     console.log(all);
//     return all.length;
// }
// console.log(solution(1000));

// function how(n, count = 0) {
//     if (n / 10 < 0) {
//         return count;
//     } else {
//         n = n / 10;
//         count++;
//         how(n, count);
//         console.log(count);
//     }
// }
// asdasdf;
// console.log(how(1000));
// function solution(n) {}

function solution(n) {
    // n의 자릿수 구하기
    let count = 0;
    let copiedN = n;
    while (copiedN > 0) {
        copiedN = Math.floor(copiedN / 10);
        count++;
    }
    // 가우스 식 사용
    return Math.round(n / (2 * count));
}
console.log(solution(999999));
console.log(solution(99));
