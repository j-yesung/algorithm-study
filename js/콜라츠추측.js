// const crypto = require('crypto');
function solution(num) {
  let count = 0;

  // 들어온 숫자가 1이 아닐 때 계속 돌고
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }

    count++;

    // count 500 채우면 종료
    if (count === 500) {
      return -1;
    }
  }

  return count;
}
console.log('결과 : ', solution(6));
// console.log(crypto.randomUUID());
