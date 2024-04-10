/**
 * [문제 설명]
 * 아래와 같이 5와 사칙연산만으로 12를 표현할 수 있습니다.
 * 12 = 5 + 5 + (5 / 5) + (5 / 5)
 * 12 = 55 / 5 + 5 / 5
 * 12 = (55 + 5) / 5
 * 5를 사용한 횟수는 각각 6,5,4 입니다. 그리고 이중 가장 작은 경우는 4입니다.
 * 이처럼 숫자 N과 number가 주어질 때, N과 사칙연산만 사용해서 표현 할 수 있는 방법 중 N 사용횟수의 최솟값을 return 하도록 solution 함수를 작성하세요.
 *
 * [제한사항]
 * N은 1 이상 9 이하입니다.
 * number는 1 이상 32,000 이하입니다.
 * 수식에는 괄호와 사칙연산만 가능하며 나누기 연산에서 나머지는 무시합니다.
 * 최솟값이 8보다 크면 -1을 return 합니다.
 *
 * [입출력 예]
 * N	number	return
 * 5	12	    4
 * 2	11	    3
 */

function solution(N, number) {
  if (N === number) return 1; // N과 number가 같으면 1번만 사용하면 됨

  // DP[i] = N을 i번 사용했을 때 나올 수 있는 수의 집합
  const DP = new Array(9).fill(0).map(() => new Set());
  DP[1].add(N); // N을 1번 사용했을 때 (이거는 고정이어서 미리 넣어줌)

  // i는 사용한 숫자의 개수
  for (let i = 2; i <= 8; i++) {
    for (let j = 1; j < i; j++) {
      for (let prev of DP[j]) {
        for (let next of DP[i - j]) {
          DP[i].add(prev + next);
          DP[i].add(prev - next);
          DP[i].add(prev * next);
          if (next !== 0) DP[i].add(Math.floor(prev / next));
        }
      }
    }
    DP[i].add(parseInt(N.toString().repeat(i)));

    console.log(DP[3]);
    if (DP[i].has(number)) return i; // N을 사용한 횟수가 누적되어 있으므로 i가 곧 최솟값
  }

  return -1;
}
console.log(solution(5, 12)); // 4
// console.log(solution(2, 11)); // 3
