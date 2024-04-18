/**
 * [문제 설명]
 * 22를 9로 나누면 나머지는 0입니다.
 * 위 문장은 틀린 말이다. 왜냐하면 22를 9로 나누면 나머지는 4가 나온다. 하지만 222222222222222222를 9로 나누면 0이 된다.
 * 이렇게 22를 9번 이어 붙이면 0으로 나누어 떨어진다.
 * 반면에 숫자 25도 3으로 나누면 나머지는 1이지만 25를 3번 이어붙여서 252525를 3으로 나누면 나머지가 0이 된다.
 * 그래서 몇번 이어붙여서 나누어 떨어지는지 최솟값을 return 하는 solution 함수를 완성해라.
 *
 * [입출력 예]
 * n  k   return
 * 22 9   9
 * 25 3   3
 */
function solution(n, k) {
  let answer = 1;
  let str = n.toString();
  let num = str;

  // 나머지가 0이 될 때까지 반복
  while (num % k !== 0) {
    num += str;
    answer++;
  }

  return answer;
}
console.log(solution(22, 9)); // 9
console.log(solution(25, 3)); // 3
